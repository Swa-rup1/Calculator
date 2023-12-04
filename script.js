let input = document.getElementById('input');

function appendValue(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function deleteChar() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let expression = input.value;

  try {
    let result = eval(expression); // Evaluating the expression
    if (Number.isFinite(result)) {
      input.value = result;
    } else {
      input.value = 'Error';
    }
  } catch (error) {
    input.value = 'Error';
  }
}
