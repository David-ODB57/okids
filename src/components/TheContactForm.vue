<template>
  <h3>Contact</h3>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>

    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>

    <button type="submit">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://example.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Shantell Sans", cursive;
  text-transform: uppercase;
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
}

button[type="submit"] {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0077ff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #0059ff;
}
</style>
