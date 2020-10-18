<template>
  <div class="registration">
    <div class="progress-section">
      <div
        class="step"
        :class="{ active: index === activeStep }"
        v-for="(step, index) in formSteps"
        :key="'step' + index"
      >
        <b-icon-check class="icon-class"></b-icon-check>

        <p>{{ step.title }}</p>
      </div>
    </div>
    <div class="registration-form">
      <b-form @submit="onSubmit" v-if="show">
        <!-- <b-form-group id="input-group-1" label="Full Name" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="formStep.fields.name"
                    required
                    placeholder="John Smith"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Email address" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="admin@admin.com"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input id="input-2" type="password" v-model="form.password" required></b-form-input>
                </b-form-group>
                <b-form-group label="You wanted to Signup as a type of user?">
                  <b-form-radio v-model="userType" name="some-radios" value="client">As a client</b-form-radio>
                  <b-form-radio v-model="userType" name="some-radios" value="notary">As a Notary</b-form-radio>
                </b-form-group>-->

        <b-form-group
          v-for="(field, index) in formSteps[activeStep].fields"
          :key="'field' + index"
          :id="'input-group-' + field.id"
          :label="field.label"
          :label-for="'input-' + field.id"
        >
          <b-form-input
            :id="'input-' + field.id"
            v-model="field.value"
            :type="field.type"
            required
            :placeholder="field.placeholder"
          ></b-form-input>
        </b-form-group>

        <b-button
          v-if="activeStep + 1 < formSteps.length - 1"
          class="gradient-btn"
          block
          >Next</b-button
        >
        <b-button
          v-if="activeStep + 1 === formSteps.length - 1"
          class="gradient-btn"
          block
          >Get Started</b-button
        >
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Registration",

  data() {
    return {
      activeStep: 0,
      formSteps: [
        {
          title: "Create Account",
          fields: [
            {
              id: 1,
              value: "",
              type: "text",
              label: "Full Name",
              placeholder: "John Doe",
              valid: true,
              pattern: /.+/,
            },
            {
              id: 2,
              value: "",
              type: "email",
              label: "Email address",
              placeholder: "admin@admin.com",
              valid: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
            {
              id: 3,
              value: "",
              type: "password",
              label: "Password",
              placeholder: "",
              valid: true,
              pattern: /.+/,
            },
          ],
        },
        {
          title: "Phone Verifican",
          fields: [
            {
              id: 1,
              value: "",
              type: "number",
              label: "Enter Mobile Number",
              placeholder: "+92 | 322 213 2143",
              valid: true,
              pattern: /.+/,
            },
            {
              id: 2,
              value: "",
              type: "number",
              label: "Enter 5 digits code",
              placeholder: "12345",
              valid: true,
              pattern: /.+/,
            },
          ],
        },
        {
          title: "Verfity ID",
          fields: [
            {
              id: 1,
              value: "",
              type: "number",
              label: "CNIC number",
              placeholder: "11111-1111111-1",
              valid: true,
              pattern: /.+/,
            },
          ],
        },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>