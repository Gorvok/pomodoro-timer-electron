# Pomodoro Timer Desktop App

A simple, customizable Pomodoro Timer built using [Electron](https://electronjs.org/) and originally based on the [electron-quick-start](https://github.com/electron/electron-quick-start) template.

This application helps you stay productive by guiding you through focused work sessions followed by short breaks. You can dynamically adjust session and break durations, and you’ll receive notifications when each session ends.

## Features

- **Focus & Break Sessions**: Alternate between focused work periods and short breaks.
- **Customizable Durations**: Adjust focus and break times via the UI at any point.
- **Automatic Cycling**: After the timer finishes one session, it automatically transitions to the next.
- **Desktop Notifications**: Get notified when a session ends, ensuring you know when to take a break or get back to work.
- **Modern UI**: A dark-themed, minimalist interface for a distraction-free experience.

## Getting Started

### Prerequisites

- **Node.js & npm**: [Download and install Node.js](https://nodejs.org/).
- **Git**: (Optional) for cloning the repository.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Gorvok/pomodoro-timer-electron.git
    cd pomodoro-timer-electron
    ```

   Or simply download the repository as a ZIP and extract it.

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm start
    ```

A window will launch with the Pomodoro timer interface.

## Usage

1. **Start a Session**:
   - Click **Start** to begin your focus period (default: 25 minutes).

2. **Stop the Timer**:
   - Click **Stop** to pause the current session. Click **Start** again to resume.

3. **Reset the Timer**:
   - Click **Reset** to return to the initial focus session time.

4. **Adjusting Durations**:
   - Change the Focus Session, Short Break, or Long Break times via the input fields.
   - The new durations apply immediately if the timer is stopped or at the start of the next session.

5. **Notifications**:
   - At the end of a session, a desktop notification alerts you to switch tasks.
   - Grant notification permissions when prompted.

## Customization

- **Theme & UI**: Modify `styles.css` to change colors, fonts, or layout.
- **Timer Logic**: Most logic is in `renderer.js`. You can tweak session lengths or add features like long breaks after several work sessions.
- **Main Process**: The `main.js` file manages the Electron lifecycle. Adjust if you need to customize window behavior.

## License & Credits

This project is originally based on [electron-quick-start](https://github.com/electron/electron-quick-start), which is released under the [CC0 License](LICENSE.md). This means the original template is in the public domain.

Your modifications can also be released under an open-source license of your choice. Be sure to acknowledge the original source if you wish to maintain transparency.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a Pull Request describing your work.

**Happy Productivity!** Stay on track and make the most of your time.
