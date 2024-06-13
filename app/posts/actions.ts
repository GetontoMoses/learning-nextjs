"use server";

export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostById({ id }: { id: number }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostComments({ id }: { id: number }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
