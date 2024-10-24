import html from "html-literal";

export default () => html`
  <h2>
    <p class="contact-text-heading">I would love to hear from you!</p>
  </h2>
  <form id="contact-form" action="" method="POST">
    <div id="contact-form-container">
      <div id="name-email-phone">
        <div class="contact-field">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-input"
            placeholder="Full Name"
            required
          />
        </div>

        <div class="contact-field">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-input"
            placeholder="you@url.com"
          />
        </div>

        <div class="contact-field">
          <label for="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            class="form-input"
            placeholder="555-555-5555"
          />
        </div>
      </div>

      <div id="msg">
        <label for="message">Enter your message:</label>
        <textarea
          name="message"
          id="message"
          class="form-input"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <!-- <div id="form-elements-container-2"> -->
      <div id="radio">
        <!-- <p>What's this message about?</p> -->
        <label for="pro">What's this message about?</label>
        <div>
          <input type="radio" name="reason" value="hire" id="hire" checked />
          <label for="hire">I'd like to hire you!</label>
        </div>
        <div id="reason-radio">
          <input type="radio" name="reason" value="personal" id="personal" />
          <label for="personal">Personal message</label>
        </div>
        <div>
          <input type="radio" name="reason" id="other" value="other" />
          <label for="other">Something else</label>
        </div>
      </div>

      <div id="select-how-heard">
        <label for="how-they-heard">How did you hear about me?</label>
        <select name="how-they-heard" id="how-they-heard">
          <optgroup label="Online">
            <option value="social">LinkedIn</option>
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
          </optgroup>
          <optgroup label="In-Person">
            <option value="networking">We met at a networking event</option>
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
          </optgroup>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
      <!-- </div> -->
    </div>
  </form>
`;
