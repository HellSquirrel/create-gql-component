module.exports = {
  UserInfo: `body,
html {
  margin: 0;
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

.button {
  border: none;
  background: #9fa628;
  color: #fff;
  padding: 10px;
  font-size: 15px;
}

.panel {
  width: 100%;
  height: 40px;
  display: flex;
  background: #9fa628;
  font-size: 15px;
  color: #fff;
  padding: 10px 20px;
  align-items: center;
}

.input {
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 15px;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}`,
  Library: `.library {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 10px;
  margin-top: 30px;
}

.plate {
  color: #383436;
  padding: 20px;
  position: relative;
  border: none;
}

.plate:nth-child(3n) {
  background: #e2cbb5;
  color: #663f4c;
}

.plate:nth-child(3n + 1) {
  background: #663f4c;
  color: #fff;
}

.plate:nth-child(3n + 2) {
  background: #bf6c35;
  color: #fff;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.user {
  font-size: 12px;
  margin-top: 5px;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  transition: opacity 300ms;
}

.plate:hover .image {
  opacity: 0.2;
}`,
  ProcessItemForm: `.form {
  display: grid;
  margin: 0 auto 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-rows: 45px;
  width: 100%;
  max-width: 840px;
  align-items: start;
}

.input {
  font-size: 15px;
  height: 38px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
}

.button {
  border: none;
  background: #bf6c35;
  color: #fff;
  padding: 10px;
  font-size: 15px;
}

.input:focus {
  border-bottom: 1px solid #bf6c35;
}`,
  UpdateItemForm: `.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}

.content {
  max-width: 480px;
  width: calc(100vw - 10px);
  margin: 20px auto;
  padding: 40px;
  background: #fff;
}

.close {
  border: none;
  background: #9fa628;
  color: #fff;
  padding: 10px;
  font-size: 15px;
  width: 100%;
}
`
};
