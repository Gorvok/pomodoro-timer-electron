/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process. No Node.js APIs are available in
 * this process because `nodeIntegration` is off and `contextIsolation` is on.
 * Use the contextBridge API in `preload.js` to expose Node.js functionality
 * from the main process.
 */

// Default durations in seconds
let workDuration = 25 * 60;    // 25 minutes
let breakDuration = 5 * 60;    // 5 minutes
let isWorkSession = true;      // Track if it's a work or break session
let timerInterval;
let remainingTime = workDuration;

// Grab UI elements
const timerDisplay = document.getElementById('timer-text');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Inputs for user-configurable times
const workDurationInput = document.getElementById('work-duration');
const shortBreakInput = document.getElementById('short-break-duration');
const longBreakInput = document.getElementById('long-break-duration');

// Update the display with the current remaining time
function updateDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            remainingTime--;
            updateDisplay(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                showNotification(isWorkSession ? "Work session completed! Time for a break." : "Break session over! Back to work.");

                // Switch sessions
                isWorkSession = !isWorkSession;
                // Set the remainingTime to the new duration
                remainingTime = isWorkSession ? workDuration : breakDuration;
                // Automatically start the next session
                startTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    isWorkSession = true;
    remainingTime = workDuration;
    updateDisplay(remainingTime);
}

function showNotification(message) {
    if (Notification.permission === "granted") {
        new Notification("Pomodoro Timer", { body: message });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Pomodoro Timer", { body: message });
            }
        });
    }
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Event listeners for input changes
workDurationInput.addEventListener('change', () => {
    const val = parseInt(workDurationInput.value, 10);
    if (!isNaN(val) && val > 0) {
        workDuration = val * 60;
        // If currently in a work session and not running, update the display immediately
        if (isWorkSession && !timerInterval) {
            remainingTime = workDuration;
            updateDisplay(remainingTime);
        }
    }
});

shortBreakInput.addEventListener('change', () => {
    const val = parseInt(shortBreakInput.value, 10);
    if (!isNaN(val) && val > 0) {
        breakDuration = val * 60;
        // If currently in a break session and not running, update the display
        if (!isWorkSession && !timerInterval) {
            remainingTime = breakDuration;
            updateDisplay(remainingTime);
        }
    }
});

// For the long break input, you can decide how to integrate it into the cycle.
// For now, it won't automatically apply to the logic unless you add a condition.
longBreakInput.addEventListener('change', () => {
    const val = parseInt(longBreakInput.value, 10);
    if (!isNaN(val) && val > 0) {
        // This sets a variable, but you’d need additional logic to make use of long breaks.
        // For example, after a certain number of work sessions, use the long break instead of the short break.
        // We'll just store it for future use.
        // longBreakDuration = val * 60; // Uncomment this if you've defined a longBreakDuration variable.
    }
});

// Initialize the display
updateDisplay(remainingTime);
