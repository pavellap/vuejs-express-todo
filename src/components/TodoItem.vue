<template>
  <li>
    <!--Это называется интерполяцией-->
    <span>
      <input type="checkbox">
      <strong>ID: {{todo.id}}</strong>
    </span>
    {{ todo.title }}
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>