# Remove Comments and Line Spaces

This is a simple web tool that allows you to remove comments and line spaces from your code. It supports various programming languages including HTML, CSS, JavaScript, PHP, Python, C, C++, Java, Ruby, Go, Swift, Rust, SQL, and more.

## Usage

1. Enter your code in the input box provided.
2. Choose the options for removing line spaces, new line spaces, and line breaks by checking the corresponding checkboxes.
3. Click the "Submit" button.

The tool will remove comments and apply the selected modifications to your code. The modified code will be displayed in the output box.

## How it Works

The code utilizes JavaScript to perform the removal of comments and line spaces. The `removeCommentsAndLineSpacesAndEmptyLines` function is responsible for processing the input code and applying the specified modifications.

The function removes various types of comments, including single-line comments (`//`), multi-line comments (`/* ... */`), HTML comments (`<!-- ... -->`), and more. It also handles the removal of line spaces, new line spaces, and line breaks based on the selected options.

The `showOutput` function is triggered when the "Submit" button is clicked. It retrieves the input code and the selected options, passes them to the `removeCommentsAndLineSpacesAndEmptyLines` function, and updates the output box with the modified code.

## Author

This tool was created by Saurav Hathi.

- GitHub: [https://github.com/sauravhathi](https://github.com/sauravhathi)
