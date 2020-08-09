<template>
  <div class="procedure-section">
    <div class="top d-flex flex-column align-items-center">
      <img alt="Vue logo" src="../assets/images/icon-document.png" />
      <h3>
        Nemo enim ipsam
        <br />voluptatem quia voluptas sit
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br />elit, sed do eiusmod tempor.
      </p>
      <a class="btn btn-large gradient-btn" href="#">How It Work</a>
    </div>
    <div class="steps">
      <div class="step-progress">
        <span></span>
      </div>
      <b-row v-for="(step, index) in steps" :key="index" class="step">
        <b-row class="step-top">
          <b-col>
            <span>{{step.info}}</span>
          </b-col>
        </b-row>

        <div class="step-bottom">
          <img src="../assets/images/chat-icon.png" />
          <div>
            <h4>{{step.heading}}</h4>
            <p>{{step.example}}</p>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcedureSection",
  data() {
    return {
      steps: [
        {
          info: "2 seconds after start time",
          icon: "chat-icon.png",
          heading: "Send Chat Message: Welcome!",
          example: "Sarah: Welcome to onboarding! We’re glad you’ re here!",
        },
        {
          info: "Play Video: Customer-Onboarding.mp4",
          icon: "chat-icon.png",
          heading: "5 seconds after start time",
          example: "23 min , 12 sec",
        },
        {
          info: "6 miniutes after start time",
          icon: "chat-icon.png",
          heading: "Send Poll: Use Case",
          example: "How do you intend the user app? (4 choices)",
        },
        {
          info: "20 miniutes after start time",
          icon: "chat-icon.png",
          heading: "Send Offer: 25%-off Business Plan",
          example: "25% off the Business Plan: expires Tuesday",
        },
      ],
    };
  },
};
</script>
