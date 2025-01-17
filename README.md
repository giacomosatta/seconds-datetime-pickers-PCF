# Seconds DateTime Picker: A PCF for Dynamics

## Overview
The Seconds DateTime Picker PCF is a custom control built for Microsoft Dynamics 365 and Power Apps. It allows users to select and input a date and time, including seconds, directly into a DateTime field. This control is particularly useful for scenarios where precise timestamps are required, such as logging events or scheduling tasks.

---

## Features
- ⏰ **Precise Date and Time Input**: Input year, month, day, hours, minutes, and seconds.
- ✨ **Real-Time Update**: Includes a "Now" button to quickly set the current date and time.
- 🔄 **Seamless Integration**: Automatically saves the selected value to a connected DateTime field in Dynamics 365.
- 🌈 **Modern UI**: Built with Fluent UI for a consistent and user-friendly experience.

---

## Installation

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn
- Power Platform CLI

### Steps
1. Clone or download the repository.
2. Open the project in your preferred code editor (e.g., Visual Studio Code).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the control:
   ```bash
   npm run build
   ```
5. Import the solution into Dynamics 365 or Power Apps:
   - Navigate to the Power Apps Maker Portal.
   - Go to **Solutions** and click **Import**.
   - Upload the solution file from the `dist` folder.

---

## Usage

### Adding the PCF to a Form
1. Open the form editor for your entity in Dynamics 365 or Power Apps.
2. Drag a DateTime field onto the form.
3. Click on the field and select **Change Properties**.
4. Under **Controls**, add the Seconds DateTime Picker PCF.

### Configuration
- Bind the PCF to the desired DateTime field.
- Save and publish the changes.

---

## Customization

### Styling
- Modify the `DateTimePCF.css` file to customize the appearance of the control.

### Behavior
- Adjust the logic in `DateTimePCF.tsx` to fit specific requirements, such as default values or additional validation.

---

## Technical Details
- **Framework**: React and Fluent UI.
- **Supported Platforms**: Model-driven apps and canvas apps in Dynamics 365 and Power Apps.
- **Dependencies**:
  - Fluent UI React components
  - Power Apps Component Framework (PCF)
- **Compatibility**: Works on major modern browsers (e.g., Edge, Chrome, Firefox).

---

## Development

### Commands
- **Start development server**:
  ```bash
  npm start
  ```
- **Build the project**:
  ```bash
  npm run build
  ```
- **Test the control**:
  ```bash
  npm test
  ```

---

## Contribution
We welcome contributions to enhance the functionality or fix bugs. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a detailed description of the changes.

### Guidelines
- Follow best practices for coding and documentation.
- Include tests where applicable.
- Respect the project's [Code of Conduct](#).

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For questions or support, please open an issue in the GitHub repository or contact the maintainer at satta.giacomo@yahoo.it

---

