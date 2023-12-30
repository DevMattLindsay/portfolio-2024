import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Canvas: React.FC = () => {
  const { width: wWidth, height: wHeight } = useWindowDimensions();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = document.querySelector(".home-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let w, h;
    let shapes: {
      x: number;
      y: number;
      speed: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
      opacity: number;
      draw: () => void;
      move: () => void;
    }[] = [];

    let staticXpos: number;
    let staticYpos: number;

    let opt = {
      shapecolor: "#666",
      radius: 2,
      distance: 200,
      circleopacity: 0,
      speed: 0.5,
    };

    let num = 5 + Math.floor(wWidth / 40);

    //helper functions
    function random(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function clearcanvas() {
      ctx.clearRect(0, 0, wWidth, wHeight);
    }

    function getCords(e: MouseEvent) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left, // +250 sidebar offset
        y: e.clientY - rect.top,
      };
    }

    function createShapes(Xpos?: number, Ypos?: number) {
      let x = Xpos ? Xpos : random(0, wWidth);
      let y = Ypos ? Ypos : random(0, wHeight);
      const speed = opt.speed;
      let vx = Math.cos(random(0, 360)) * speed;
      let vy = Math.sin(random(0, 360)) * speed;
      const r = opt.radius;
      const color = opt.shapecolor;
      const opacity = opt.circleopacity;
      const draw = function () {
        ctx.beginPath();
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = opacity;
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      };
      const move = function () {
        x += vx;
        y += vy;
        if (x >= wWidth || x <= 0) {
          vx *= -1;
        }
        if (y >= wHeight || y <= 0) {
          vy *= -1;
        }
        x > wWidth ? (x = wWidth) : x;
        y > wHeight ? (y = wHeight) : y;
        x < 0 ? (x = 0) : x;
        y < 0 ? (y = 0) : y;
      };

      return {
        x: x,
        y: y,
        speed: speed,
        vx: vx,
        vy: vy,
        r: r,
        color: color,
        opacity: opacity,
        draw: draw,
        move: move,
      };
    }

    function check(
      point1: { x: number; y: number },
      rest: { x: number; y: number }[]
    ) {
      for (var j = 0; j < rest.length; j++) {
        var yd = point1.y - rest[j].y;
        var xd = point1.x - rest[j].x;
        var d = Math.sqrt(xd * xd + yd * yd);
        if (d < opt.distance) {
          ctx.beginPath();
          ctx.globalAlpha = 1 - d / opt.distance;
          ctx.globalCompositeOperation = "destination-over";
          ctx.lineWidth = 1;
          ctx.moveTo(point1.x, point1.y);
          ctx.lineTo(rest[j].x, rest[j].y);
          ctx.strokeStyle = opt.shapecolor;
          ctx.lineCap = "round";
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

    function loop() {
      clearcanvas();
      shapes[0].x = staticXpos;
      shapes[0].y = staticYpos;
      shapes[0].move();
      shapes[0].draw();
      for (var i = 1; i < shapes.length; i++) {
        shapes[i].move();
        shapes[i].draw();
        check(shapes[i], shapes);
      }
      window.requestAnimationFrame(loop);
    }

    function init() {
      for (var i = 0; i < num; i++) {
        shapes.push(createShapes());
      }
      window.requestAnimationFrame(loop);
    }

    var resize = function () {
      w = canvas.width = wWidth;
      h = canvas.height = wHeight;
    };

    init();
    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (e) {
      var pos = getCords(e);
      staticXpos = pos.x;
      staticYpos = pos.y;
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="home-canvas"></canvas>;
};

export default Canvas;
