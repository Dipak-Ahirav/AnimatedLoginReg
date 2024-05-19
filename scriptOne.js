const container = document.querySelector('.container');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  const containerRect = container.getBoundingClientRect();
  const isOverContainer = (
    e.clientX >= containerRect.left &&
    e.clientX <= containerRect.right &&
    e.clientY >= containerRect.top &&
    e.clientY <= containerRect.bottom
  );

  container.style.boxShadow = isOverContainer ? '0 0 20px rgba(255, 255, 255, 0.8)' : 'none';
});

const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });

  link.addEventListener('mouseout', () => {
    cursor.classList.remove('active');
  });
});

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });

  button.addEventListener('mouseout', () => {
    cursor.classList.remove('active');
  });
});

inputs.forEach((input) => {
  input.addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });

  input.addEventListener('mouseout', () => {
    cursor.classList.remove('active');
  });
});