// State Management
let state = {
    currentInput: "",
    theme: "light"
};

const display = document.getElementById("display");
const themeSelect = document.getElementById("themeSelect");

// Append numbers/operators
function appendValue(value) {
    state.currentInput += value;
    display.value = state.currentInput;
}

// Clear display
function clearDisplay() {
    state.currentInput = "";
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        state.currentInput = eval(state.currentInput).toString();
        display.value = state.currentInput;
    } catch {
        display.value = "Error";
    }
}

// Theme management
themeSelect.addEventListener("change", () => {
    state.theme = themeSelect.value;
    document.body.setAttribute("data-theme", state.theme);
});