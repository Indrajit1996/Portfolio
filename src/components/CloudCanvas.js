import { useEffect, useRef } from 'react';

const CloudCanvas = ({ className = '', style = {}, amplitude }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // 🎨 Updated fragment shader using your header/body/link colors
    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = ${amplitude};
        float frequency = 1.0;

        for (int i = 0; i < 6; i++) {
          value += amplitude * smoothNoise(p * frequency);
          amplitude *= 0.55;
          frequency *= 2.0;
        }
        return value;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv -= 0.5;
        uv.x *= u_resolution.x / u_resolution.y;

        // Flow distortion
        uv += 0.02 * vec2(sin(u_time * 0.7), cos(u_time * 0.15));

        // Noise-based cloud shape
        vec2 p = uv * 3.5;
        float clouds = fbm(p + vec2(u_time * 0.05, 0.0));

        // 🎨 Dark bluish color palette
        vec3 skyColor = vec3(0.02, 0.05, 0.12); // deep dark blue
        vec3 horizonColor = vec3(0.08, 0.15, 0.25); // darker blue
        vec3 cloudLight = vec3(0.3, 0.4, 0.6); // light blue-grey
        vec3 accentGlow = vec3(0.1, 0.3, 0.8); // bright blue accent

        // Gradient sky
        vec3 baseSky = mix(skyColor, horizonColor, uv.y + 0.5);
        vec3 cloudCol = mix(baseSky, cloudLight, smoothstep(0.4, 0.8, clouds));

        // Add subtle orange glow
        cloudCol += 0.1 * accentGlow * sin(u_time * 0.1 + uv.y * 3.0);

        // Vignette effect
        float dist = length(uv);
        float vignette = smoothstep(0.9, 0.4, dist);
        cloudCol *= vignette;

        gl_FragColor = vec4(cloudCol, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

    function resizeCanvas() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    function render(time) {
      resizeCanvas();
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }, []);

  return <canvas ref={canvasRef} className={className} style={style} />;
};

export default CloudCanvas;
