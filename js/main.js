const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const W = 800;
const H = 600;

const max = 300;
const maxSquares = 20;
const pointsPerFace = 20;
const amplitude = 10;

const step = H / 2 / maxSquares;

const random = factor => {
	return Math.random() * factor;
};

const monCarre = (ctx, x, y, c, amp) => {
	ctx.beginPath();
	ctx.moveTo(x, y);
	let i;
	let currentX = x;
	let currentY = y;
	let step = c / pointsPerFace;
	for (i = 0; i < pointsPerFace; i++) {
		ctx.lineTo(currentX + i * step, currentY + random(amp));
	}
	currentX = x + c;
	for (i = 0; i < pointsPerFace; i++) {
		ctx.lineTo(currentX + random(amp), currentY + i * step);
	}
	currentY = y + c;
	for (i = 0; i < pointsPerFace; i++) {
		ctx.lineTo(currentX - i * step, currentY + random(amp));
	}
	currentX = x;
	for (i = 0; i < pointsPerFace; i++) {
		ctx.lineTo(currentX + random(amp), currentY - i * step);
	}
	ctx.closePath();
	ctx.stroke();
};

for (var i = 0; i < maxSquares; i++) {
	const x = i * step;
	const y = i * step;
	const c = H - i * step * 2;
	monCarre(ctx, x, y, c, amplitude);
}
