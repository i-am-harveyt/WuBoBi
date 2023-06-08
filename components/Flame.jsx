import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

function Flame() {
	const ref = useRef(null);
	const [EDGE, setEDGE] = useState(600);

	class PaperMoney {
		constructor() {
			this.x = EDGE * 1.5 * 0.5;
			this.y = (1 / 5) * EDGE;
			this.edge = EDGE * 0.1;
			this.isDragging = false;
			this.offsetX = 0;
			this.offsetY = 0;
		}
		draw(ctx) {
			ctx.beginPath();
			ctx.fillStyle = "gold";
			ctx.fillRect(
				pm.x - (1 / 2) * this.edge,
				pm.y - (1 / 2) * this.edge,
				pm.edge,
				pm.edge
			);
			ctx.fill();
			ctx.closePath();
		}
	}

	let pm = new PaperMoney();

	/* Mouse Event */
	const handleMouseDown = (event) => {
		const rect = ref.current.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		if (
			mouseX >= pm.x - pm.edge &&
			mouseX <= pm.x + pm.edge &&
			mouseY >= pm.y - pm.edge &&
			mouseY <= pm.y + pm.edge
		) {
			pm.isDragging = true;
			pm.offsetX = pm.x - mouseX;
			pm.offsetY = pm.y - mouseY;
		}
	};

	const handleMouseMove = (event) => {
		if (pm.isDragging) {
			const rect = ref.current.getBoundingClientRect();
			const mouseX = event.clientX - rect.left;
			const mouseY = event.clientY - rect.top;

			pm.x = mouseX + pm.offsetX;
			pm.y = mouseY + pm.offsetY;
		}
	};

	const handleMouseUp = () => {
		pm.isDragging = false;
	};

	// class sparks
	class Spark {
		constructor() {
			this.x = (EDGE * 1.5) / 2 + (Math.random() - 0.5) * 200;
			this.y = EDGE;
			this.vx = 0.3;
			this.vy = Math.random() * -2.2;
			this.radius = EDGE / 100;
			this.life = Math.floor(Math.random() * 300) + 5;
		}

		update() {
			this.x += this.vx + (Math.random() - 0.5);
			this.y += this.vy;
			this.life -= 1;
		}
	}

	let sparks = [];

	// class Fire
	class Fire {
		constructor() {
			this.x = (EDGE * 1.5) / 2 + (Math.random() - 0.5) * 100;
			this.y = EDGE;
			this.vy = -5;
			this.radius = EDGE / 4;
			this.life = Math.random() * 32;
		}

		update() {
			this.x += 1 + (Math.random() - 0.5) * 30;
			this.y += this.vy;
			this.life -= Math.random();
			this.radius = this.radius > 2 ? this.radius - 2 : 0;

			// 检测与pm的碰撞
			if (
				this.x + this.radius >= pm.x - pm.edge &&
				this.x - this.radius <= pm.x + pm.edge &&
				this.y + this.radius >= pm.y - pm.edge &&
				this.y - this.radius <= pm.y + pm.edge
			) {
				this.vy -= 0.3;
				// 执行碰撞后的操作
				if (!pm.isDragging) (pm.x = EDGE * 1.5 * 0.5), (pm.y = (1 / 5) * EDGE);
			}
		}
	}

	let fire = [];

	let draw = (ctx) => {
		// black background
		ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
		ctx.fillRect(0, 0, EDGE * 1.5, EDGE);

		/* Sparks */
		if (sparks.length < 50) sparks.push(new Spark());
		// draw sparks
		for (let i = 0; i < sparks.length; i++) {
			sparks[i].update();
			ctx.beginPath();
			ctx.arc(sparks[i].x, sparks[i].y, sparks[i].radius, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(255, 165, 0, " + (sparks[i].life * 0.3) / 60 + ")";
			ctx.fill();
			ctx.closePath();
		}
		for (let i = 0; i < sparks.length; i++)
			if (sparks[i].life <= 0) sparks.splice(i--, 1);

		/* Fire */
		if (fire.length < 60) fire.push(new Fire());
		for (let i = 0; i < fire.length; i++) {
			fire[i].update();
			ctx.beginPath();
			ctx.arc(fire[i].x, fire[i].y, fire[i].radius, 0, 2 * Math.PI);
			var gradient = ctx.createRadialGradient(
				fire[i].x,
				fire[i].y,
				0,
				fire[i].x,
				fire[i].y,
				fire[i].radius
			);
			let ratio = fire[i].y / EDGE;
			gradient.addColorStop(
				0,
				"rgba(255, " + (100 + 155 * ratio) + ", " + 180 * ratio + ", 1)"
			);
			gradient.addColorStop(1, "rgba(255, 160, 0, 0.09)");
			ctx.fillStyle = gradient;
			ctx.fill();
			ctx.closePath();
		}
		for (let i = 0; i < fire.length; i++)
			if (fire[i].life <= 0 || fire[i].radius <= 0) fire.splice(i--, 1);

		/* PaperMoney, in the front of fire */
		pm.draw(ctx);
	};

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		let animationFrameID;

		const handleResize = () => {
			// 更新 EDGE 值為視窗寬度的 50%
			setEDGE(window.innerWidth * 0.35);
		};

		const render = () => {
			draw(ctx);
			animationFrameID = window.requestAnimationFrame(render);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // 初始設置 EDGE 值
		render();

		return () => {
			window.removeEventListener("resize", handleResize);
			window.cancelAnimationFrame(animationFrameID);
		};
	}, [draw, EDGE]);

	return (
		<Box w={"100%"} display={"flex"} justifyContent={"center"}>
			<canvas
				ref={ref}
				width={EDGE * 1.5}
				height={EDGE}
				onMouseUp={handleMouseUp}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
			/>
		</Box>
	);
}

export default Flame;
