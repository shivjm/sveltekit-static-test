<script context="module">
  export async function load({ fetch }) {
    const response = await fetch("/data/");
    return {
      props: {
        status: response.status,
        data: await response.text(),
      },
    };
  }
</script>

<script>
  export let data;
  export let status;
</script>

{status}:
<pre>{data}</pre>
