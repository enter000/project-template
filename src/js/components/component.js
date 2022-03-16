export default function componentExport() {
  console.log('hello from component');
}

export async function asyncFunction() {
  const results = await fetch(
    'https://api.github.com/users/enter000/repos'
  ).then((response) => response.json());
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 1000);
  });
}
