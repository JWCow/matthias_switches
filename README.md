# Keyboard Switch Selector

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.7%2B-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green)](https://flask.palletsprojects.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)](https://getbootstrap.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

An interactive web application that helps mechanical keyboard enthusiasts find their perfect keyboard switches based on preferences. This tool allows users to filter and explore different mechanical keyboard switches by their physical characteristics.

![Keyboard Switch Selector Preview](preview.jpg)

## Description

The Keyboard Switch Selector is a modern web application built with Flask and Bootstrap that helps users navigate the complex world of mechanical keyboard switches. Whether you're building your first custom keyboard or looking to try something new, this tool helps you find switches that match your preferences for:

- Actuation Force (35-80gf)
- Switch Type (Linear, Tactile, Clicky)
- Pre-travel Distance (1-3mm)

The application features:
- Real-time filtering of switches based on user preferences
- Modern, responsive UI that works on all devices
- Detailed specifications for each switch
- Visual card-based results for easy comparison

## Features

- Interactive UI with modern design
- Filter switches by multiple parameters
- Real-time results
- Responsive design that works on all devices
- Tolerance-based filtering to show close matches
- Bootstrap 5 for modern styling

## Setup

1. Make sure you have Python 3.7+ installed on your system
2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

## How to Use

1. Use the sliders to set your preferred actuation force and pre-travel distance
2. Select your desired switch type from the dropdown menu
3. Click "Apply Filters" to see matching switches
4. Results will be displayed as cards with detailed switch information

## Technical Details

- Backend: Python Flask
- Frontend: HTML5, Bootstrap 5
- Database: In-memory switch database (easily extensible)
- API: RESTful endpoints for switch filtering

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 JWCow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
``` 