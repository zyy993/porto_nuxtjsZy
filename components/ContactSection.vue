<template>
  <section class="contact">
    <div class="contact-me">
      <h1 class="secondary-text">Contact Me</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name" class="secondary-text">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email" class="secondary-text">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message" class="secondary-text">Message:</label>
          <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="formStatus" class="form-status">{{ formStatus }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formStatus: ''
    };
  },
  methods: {
    submitForm() {
      // Simulate form submission logic (replace with actual submission logic)
      // Here, you can integrate with backend or send an email, etc.
      setTimeout(() => {
        this.formStatus = 'Form submitted successfully!';
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }, 1000); // Simulating a delay
    }
  }
};
</script>

<style scoped>
.contact {
  background: #161616;
}

.contact-me {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #474747; /* Background color changed to dark gray */
  border-radius: 8px;
}

.secondary-text {
  color: #aeaeae; /* Replace with your secondary color */
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #fd8791;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #fd8791;
}

.form-status {
  margin-top: 10px;
  padding: 10px;
  background-color: #dff0d8;
  border: 1px solid #d6e9c6;
  color: #fd8791;
  border-radius: 4px;
}
</style>
