import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export default function AudioRecorder() {
	const [recording, setRecording] = useState(false);
	const canvasRef = useRef(null);

	useEffect(() => {
		let mediaStream = null;
		let canvasContext = null;

		const startRecording = async () => {
			try {
				mediaStream = await navigator.mediaDevices.getUserMedia({
					audio: true,
				});
				// 处理获取到的音频流
				console.log("获取到音频流");
			} catch (error) {
				console.error("无法获取麦克风权限：", error);
			}
			// 获取<canvas>元素的上下文
			canvasContext = canvasRef.current.getContext("2d");

			const audioContext = new (window.AudioContext ||
				window.webkitAudioContext)();
			const mediaStreamSource =
				audioContext.createMediaStreamSource(mediaStream);
			const analyserNode = audioContext.createAnalyser();

			mediaStreamSource.connect(analyserNode);
			analyserNode.connect(audioContext.destination);

			const bufferLength = analyserNode.frequencyBinCount;
			const dataArray = new Uint8Array(bufferLength);

			const draw = () => {
				requestAnimationFrame(draw);
				analyserNode.getByteFrequencyData(dataArray);

				canvasContext.fillStyle = "rgba(0, 0, 0, 0.8)";
				canvasContext.fillRect(0, 0, 600, 500);

				canvasContext.fillStyle = "white";
				const barWidth = 1;
				let barHeight;
				let x = 0;

				for (let i = 0; i < bufferLength; i++) {
					barHeight = dataArray[i] * 0.75;
					canvasContext.fillRect(x, 100 - barHeight, barWidth, barHeight);
					x += barWidth;
				}
			};

			draw();
		};

		const stopRecording = () => {
			if (mediaStream) {
				mediaStream.getTracks().forEach((track) => track.stop());
				// 处理停止录制操作
				console.log("停止收音");
			}
		};

		if (recording) startRecording();
		else stopRecording();

		return () => {
			stopRecording();
		};
	}, [recording]);

	return (
		<>
			<Button onClick={() => setRecording(!recording)}>
				{recording ? "結束收音" : "開始收音"}
			</Button>
			<canvas
				ref={canvasRef}
				width={"100%"}
				height={"50px"}
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.8)",
				}}
			/>
		</>
	);
}
