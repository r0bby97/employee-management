// Employee example data and current state
// prettier-ignore
let employees = [
    { id: 1, name: "Jane Doe", department: "IT", position: "Frontend Developer", notes: "Focuses on accessible interfaces and reusable UI components." },
    { id: 2, name: "Alex Smith", department: "Sales", position: "Account Manager", notes: "Main contact for long-term business customers." },
    { id: 3, name: "Sam Taylor", department: "Human Resources", position: "Recruiter", notes: "Coordinates interviews and guides applicants through hiring." },
    { id: 4, name: "Emily Johnson", department: "IT", position: "Backend Developer", notes: "" },
    { id: 5, name: "Michael Brown", department: "Finance", position: "Accountant", notes: "Handles invoice checks and monthly account reconciliations." },
    { id: 6, name: "Sophia Wilson", department: "Sales", position: "Sales Representative", notes: "Helps new customers choose suitable services." },
    { id: 7, name: "Daniel Lee", department: "IT", position: "Frontend Developer", notes: "Focuses on accessible interfaces and reusable UI components." },
    { id: 8, name: "Olivia Davis", department: "Human Resources", position: "HR Manager", notes: "" },
    { id: 9, name: "James Miller", department: "Finance", position: "Financial Analyst", notes: "Prepares budget forecasts and financial reports." },
    { id: 10, name: "Emma Clark", department: "Operations", position: "Operations Coordinator", notes: "Coordinates daily processes across several teams." },
    { id: 11, name: "Liam Anderson", department: "IT", position: "Frontend Developer", notes: "Focuses on accessible interfaces and reusable UI components." },
    { id: 12, name: "Noah Thomas", department: "Sales", position: "Account Manager", notes: "" },
    { id: 13, name: "Charlotte Jackson", department: "Human Resources", position: "Recruiter", notes: "Coordinates interviews and guides applicants through hiring." },
    { id: 14, name: "Amelia White", department: "Finance", position: "Accountant", notes: "Handles invoice checks and monthly account reconciliations." },
    { id: 15, name: "Lucas Harris", department: "Operations", position: "Operations Coordinator", notes: "Coordinates daily processes across several teams." },
    { id: 16, name: "Mia Martin", department: "Marketing", position: "Content Manager", notes: "" },
    { id: 17, name: "Henry Thompson", department: "Customer Support", position: "Support Agent", notes: "Answers incoming questions and documents common solutions." },
    { id: 18, name: "Isabella Garcia", department: "Design", position: "UI Designer", notes: "Maintains interface patterns and visual design guidelines." },
    { id: 19, name: "Ethan Martinez", department: "Logistics", position: "Logistics Coordinator", notes: "Coordinates shipments and delivery schedules." },
    { id: 20, name: "Ava Robinson", department: "Legal", position: "Legal Counsel", notes: "" },
    { id: 21, name: "Benjamin Walker", department: "IT", position: "Backend Developer", notes: "Maintains internal APIs and database integrations." },
    { id: 22, name: "Evelyn Hall", department: "Sales", position: "Sales Representative", notes: "Helps new customers choose suitable services." },
    { id: 23, name: "Mason Allen", department: "Human Resources", position: "HR Manager", notes: "Coordinates team development and internal HR processes." },
    { id: 24, name: "Harper Young", department: "Finance", position: "Financial Analyst", notes: "" },
    { id: 25, name: "Logan King", department: "Operations", position: "Operations Manager", notes: "Plans operational capacity and improves team workflows." },
    { id: 26, name: "Ella Wright", department: "Marketing", position: "Marketing Specialist", notes: "Coordinates campaigns and evaluates their results." },
    { id: 27, name: "Oliver Scott", department: "Customer Support", position: "Support Specialist", notes: "Investigates technical support cases and maintains guides." },
    { id: 28, name: "Grace Green", department: "Design", position: "UX Designer", notes: "" },
    { id: 29, name: "Jack Baker", department: "Logistics", position: "Supply Chain Analyst", notes: "Reviews inventory data and supply-chain forecasts." },
    { id: 30, name: "Chloe Adams", department: "Legal", position: "Compliance Specialist", notes: "Maintains internal compliance checklists and training." },
    { id: 31, name: "William Nelson", department: "IT", position: "QA Engineer", notes: "Coordinates regression tests and documents reproducible bugs." },
    { id: 32, name: "Lily Carter", department: "Sales", position: "Sales Coordinator", notes: "" },
    { id: 33, name: "Leo Mitchell", department: "Human Resources", position: "HR Specialist", notes: "Supports employee onboarding and internal training." },
    { id: 34, name: "Nora Perez", department: "Finance", position: "Payroll Specialist", notes: "Coordinates payroll checks and payment schedules." },
    { id: 35, name: "Owen Roberts", department: "Operations", position: "Process Analyst", notes: "Documents workflows and identifies process improvements." },
    { id: 36, name: "Zoe Turner", department: "Marketing", position: "SEO Specialist", notes: "" },
    { id: 37, name: "Jacob Phillips", department: "Customer Support", position: "Support Team Lead", notes: "Coordinates escalations and supports the service team." },
    { id: 38, name: "Hannah Campbell", department: "Design", position: "Graphic Designer", notes: "Creates campaign graphics and presentation assets." },
    { id: 39, name: "Oscar Parker", department: "Logistics", position: "Warehouse Manager", notes: "Coordinates warehouse processes and stock checks." },
    { id: 40, name: "Lucy Evans", department: "Legal", position: "Contract Manager", notes: "" },
    { id: 41, name: "Liam Garcia", department: "IT", position: "Frontend Developer", notes: "Focuses on accessible interfaces and reusable UI components." },
    { id: 42, name: "Noah Martinez", department: "Sales", position: "Account Manager", notes: "Main contact for long-term business customers." },
    { id: 43, name: "Charlotte Robinson", department: "Human Resources", position: "Recruiter", notes: "Coordinates interviews and guides applicants through hiring." },
    { id: 44, name: "Amelia Walker", department: "Finance", position: "Accountant", notes: "" },
    { id: 45, name: "Lucas Hall", department: "Operations", position: "Operations Coordinator", notes: "Coordinates daily processes across several teams." },
    { id: 46, name: "Mia Allen", department: "Marketing", position: "Content Manager", notes: "Maintains editorial calendars and reviews website content." },
    { id: 47, name: "Henry Young", department: "Customer Support", position: "Support Agent", notes: "Answers incoming questions and documents common solutions." },
    { id: 48, name: "Isabella King", department: "Design", position: "UI Designer", notes: "" },
    { id: 49, name: "Ethan Wright", department: "Logistics", position: "Logistics Coordinator", notes: "Coordinates shipments and delivery schedules." },
    { id: 50, name: "Ava Scott", department: "Legal", position: "Legal Counsel", notes: "Reviews agreements and advises teams on contract questions." },
    { id: 51, name: "Benjamin Green", department: "IT", position: "Backend Developer", notes: "Maintains internal APIs and database integrations." },
    { id: 52, name: "Evelyn Baker", department: "Sales", position: "Sales Representative", notes: "" },
    { id: 53, name: "Mason Adams", department: "Human Resources", position: "HR Manager", notes: "Coordinates team development and internal HR processes." },
    { id: 54, name: "Harper Nelson", department: "Finance", position: "Financial Analyst", notes: "Prepares budget forecasts and financial reports." },
    { id: 55, name: "Logan Carter", department: "Operations", position: "Operations Manager", notes: "Plans operational capacity and improves team workflows." },
    { id: 56, name: "Ella Mitchell", department: "Marketing", position: "Marketing Specialist", notes: "" },
    { id: 57, name: "Oliver Perez", department: "Customer Support", position: "Support Specialist", notes: "Investigates technical support cases and maintains guides." },
    { id: 58, name: "Grace Roberts", department: "Design", position: "UX Designer", notes: "Conducts usability reviews and maps customer journeys." },
    { id: 59, name: "Jack Turner", department: "Logistics", position: "Supply Chain Analyst", notes: "Reviews inventory data and supply-chain forecasts." },
    { id: 60, name: "Chloe Phillips", department: "Legal", position: "Compliance Specialist", notes: "" },
    { id: 61, name: "William Campbell", department: "IT", position: "QA Engineer", notes: "Coordinates regression tests and documents reproducible bugs." },
    { id: 62, name: "Lily Parker", department: "Sales", position: "Sales Coordinator", notes: "Coordinates quotations and follows up on sales requests." },
    { id: 63, name: "Leo Evans", department: "Human Resources", position: "HR Specialist", notes: "Supports employee onboarding and internal training." },
    { id: 64, name: "Nora Anderson", department: "Finance", position: "Payroll Specialist", notes: "" },
    { id: 65, name: "Owen Thomas", department: "Operations", position: "Process Analyst", notes: "Documents workflows and identifies process improvements." },
    { id: 66, name: "Zoe Jackson", department: "Marketing", position: "SEO Specialist", notes: "Reviews search visibility and improves content structure." },
    { id: 67, name: "Jacob White", department: "Customer Support", position: "Support Team Lead", notes: "Coordinates escalations and supports the service team." },
    { id: 68, name: "Hannah Harris", department: "Design", position: "Graphic Designer", notes: "" },
    { id: 69, name: "Oscar Martin", department: "Logistics", position: "Warehouse Manager", notes: "Coordinates warehouse processes and stock checks." },
    { id: 70, name: "Lucy Thompson", department: "Legal", position: "Contract Manager", notes: "Tracks contract renewals and keeps agreement records current." },
    { id: 71, name: "Liam King", department: "IT", position: "Frontend Developer", notes: "Focuses on accessible interfaces and reusable UI components." },
    { id: 72, name: "Noah Wright", department: "Sales", position: "Account Manager", notes: "" },
    { id: 73, name: "Charlotte Scott", department: "Human Resources", position: "Recruiter", notes: "Coordinates interviews and guides applicants through hiring." },
    { id: 74, name: "Amelia Green", department: "Finance", position: "Accountant", notes: "Handles invoice checks and monthly account reconciliations." },
    { id: 75, name: "Lucas Baker", department: "Operations", position: "Operations Coordinator", notes: "Coordinates daily processes across several teams." },
    { id: 76, name: "Mia Adams", department: "Marketing", position: "Content Manager", notes: "" },
    { id: 77, name: "Henry Nelson", department: "Customer Support", position: "Support Agent", notes: "Answers incoming questions and documents common solutions." },
    { id: 78, name: "Isabella Carter", department: "Design", position: "UI Designer", notes: "Maintains interface patterns and visual design guidelines." },
    { id: 79, name: "Ethan Mitchell", department: "Logistics", position: "Logistics Coordinator", notes: "Coordinates shipments and delivery schedules." },
    { id: 80, name: "Ava Perez", department: "Legal", position: "Legal Counsel", notes: "" },
    { id: 81, name: "Benjamin Roberts", department: "IT", position: "Backend Developer", notes: "Maintains internal APIs and database integrations." },
    { id: 82, name: "Evelyn Turner", department: "Sales", position: "Sales Representative", notes: "Helps new customers choose suitable services." },
    { id: 83, name: "Mason Phillips", department: "Human Resources", position: "HR Manager", notes: "Coordinates team development and internal HR processes." },
    { id: 84, name: "Harper Campbell", department: "Finance", position: "Financial Analyst", notes: "" },
    { id: 85, name: "Logan Parker", department: "Operations", position: "Operations Manager", notes: "Plans operational capacity and improves team workflows." },
    { id: 86, name: "Ella Evans", department: "Marketing", position: "Marketing Specialist", notes: "Coordinates campaigns and evaluates their results." },
    { id: 87, name: "Oliver Anderson", department: "Customer Support", position: "Support Specialist", notes: "Investigates technical support cases and maintains guides." },
    { id: 88, name: "Grace Thomas", department: "Design", position: "UX Designer", notes: "" },
    { id: 89, name: "Jack Jackson", department: "Logistics", position: "Supply Chain Analyst", notes: "Reviews inventory data and supply-chain forecasts." },
    { id: 90, name: "Chloe White", department: "Legal", position: "Compliance Specialist", notes: "Maintains internal compliance checklists and training." },
    { id: 91, name: "William Harris", department: "IT", position: "QA Engineer", notes: "Coordinates regression tests and documents reproducible bugs." },
    { id: 92, name: "Lily Martin", department: "Sales", position: "Sales Coordinator", notes: "" },
    { id: 93, name: "Leo Thompson", department: "Human Resources", position: "HR Specialist", notes: "Supports employee onboarding and internal training." },
    { id: 94, name: "Nora Garcia", department: "Finance", position: "Payroll Specialist", notes: "Coordinates payroll checks and payment schedules." },
    { id: 95, name: "Owen Martinez", department: "Operations", position: "Process Analyst", notes: "Documents workflows and identifies process improvements." },
    { id: 96, name: "Zoe Robinson", department: "Marketing", position: "SEO Specialist", notes: "" },
    { id: 97, name: "Jacob Walker", department: "Customer Support", position: "Support Team Lead", notes: "Coordinates escalations and supports the service team." },
    { id: 98, name: "Hannah Hall", department: "Design", position: "Graphic Designer", notes: "Creates campaign graphics and presentation assets." },
    { id: 99, name: "Oscar Allen", department: "Logistics", position: "Warehouse Manager", notes: "Coordinates warehouse processes and stock checks." },
    { id: 100, name: "Lucy Young", department: "Legal", position: "Contract Manager", notes: "" },
];

let matchingEmployees = [];
let editingEmployeeId = null;
let displayedEmployeeCount = 0;

// HTML elements
// Add employee form
const addForm = document.getElementById("add-form");

// Employee list, search and filters
const employeeList = document.getElementById("employee-list");
const searchInput = document.getElementById("search-input");
const filterField = document.getElementById("filter-field");
const filterValue = document.getElementById("filter-value");
const sortSelect = document.getElementById("sort-select");
const listError = document.getElementById("list-error");

// Edit employee dialog
const editDialog = document.getElementById("edit-dialog");
const editForm = document.getElementById("edit-form");
const editError = document.getElementById("edit-error");
const cancelEditButton = document.getElementById("cancel-edit-button");
const editNameInput = document.getElementById("edit-name-input");
const editDepartmentInput = document.getElementById("edit-department-input");
const editPositionInput = document.getElementById("edit-position-input");
const editNotesInput = document.getElementById("edit-notes-input");

// Settings, theme and JSON files
const settingsButton = document.getElementById("settings-button");
const settingsMenu = document.getElementById("settings-menu");
const themeButton = document.getElementById("theme-button");
const themeLabel = document.getElementById("theme-label");
const exportButton = document.getElementById("export-button");
const importButton = document.getElementById("import-button");
const importInput = document.getElementById("import-input");

// Reset confirmation dialog
const resetButton = document.getElementById("reset-button");
const resetDialog = document.getElementById("reset-dialog");
const cancelResetButton = document.getElementById("cancel-reset-button");
const confirmResetButton = document.getElementById("confirm-reset-button");

// Event listeners
addForm.addEventListener("submit", (event) => {
  // Prevent the form from reloading the page.
  event.preventDefault();
  addEmployee();
});

searchInput.addEventListener("input", () => {
  refreshEmployeeList();
});

cancelEditButton.addEventListener("click", () => {
  editDialog.close();
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  editEmployee();
});

// Listen on the list so new Edit and Delete buttons work too.
employeeList.addEventListener("click", (event) => {
  // Find the button even if the click lands on something inside it.
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  const employeeListItem = clickedButton.closest("li");
  if (!employeeListItem) return;

  // Convert the dataset ID to a number before comparing it.
  const employeeId = Number(employeeListItem.dataset.id);

  if (clickedButton.dataset.action === "delete") {
    deleteEmployee(employeeId);
  } else if (clickedButton.dataset.action === "edit") {
    openEditDialog(employeeId);
  }
});

filterField.addEventListener("change", () => {
  updateFilterOptions();
  refreshEmployeeList();
});

filterValue.addEventListener("change", () => {
  refreshEmployeeList();
});

sortSelect.addEventListener("change", () => {
  refreshEmployeeList();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (!settingsMenu.classList.contains("hidden")) {
    closeSettingsMenu();
    settingsButton.focus();
  }

  // Hide the notes even if the pointer or focus is still on the button.
  employeeList
    .querySelectorAll(".employee-info")
    .forEach((employeeInfoElement) => {
      employeeInfoElement.classList.add("tooltip-dismissed");
    });
});

settingsButton.addEventListener("click", () => {
  const isSettingsMenuHidden = settingsMenu.classList.toggle("hidden");
  // Let screen readers know whether the menu is open.
  settingsButton.setAttribute("aria-expanded", String(!isSettingsMenuHidden));
});

document.addEventListener("click", (event) => {
  // Leave the menu open when a click comes from inside it.
  if (event.target.closest(".settings")) return;
  closeSettingsMenu();
});

themeButton.addEventListener("click", () => {
  const isDarkMode = !document.body.classList.contains("dark-mode");
  applyTheme(isDarkMode);

  try {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  } catch (error) {
    console.error("Error while saving the theme preference:", error);
    showError(
      listError,
      "The theme was changed, but your preference could not be saved.",
    );
  }
});

exportButton.addEventListener("click", () => {
  exportEmployees();
});

importButton.addEventListener("click", () => {
  importInput.click();
});

importInput.addEventListener("change", () => {
  const selectedImportFile = importInput.files[0];
  if (!selectedImportFile) return;
  importEmployees(selectedImportFile);
});

resetButton.addEventListener("click", () => {
  resetDialog.showModal();
});

cancelResetButton.addEventListener("click", () => {
  resetDialog.close();
});

confirmResetButton.addEventListener("click", () => {
  resetEmployees();
});

// Infinite scrolling
// Load more employees when the sentinel comes into view.
const employeeScrollObserver = new IntersectionObserver((observerEntries) => {
  if (observerEntries[0].isIntersecting) loadMoreEmployees();
});

// Add, edit, filter and delete employees
// Check the inputs, give the employee an ID and save the new list.
function addEmployee() {
  const nameInput = document.getElementById("add-name-input");
  const departmentInput = document.getElementById("add-department-input");
  const positionInput = document.getElementById("add-position-input");
  const notesInput = document.getElementById("add-notes-input");
  const formError = document.getElementById("add-error");

  clearError(formError);
  if (!nameInput || !departmentInput || !positionInput) return;

  const newEmployee = {
    id: getHighestId() + 1,
    name: nameInput.value.trim(),
    department: departmentInput.value.trim(),
    position: positionInput.value.trim(),
    notes: notesInput.value.trim(),
  };

  const errorMessage = validateEmployee(newEmployee);
  formError.textContent = errorMessage;
  formError.classList.toggle("hidden", errorMessage === "");
  if (errorMessage !== "") return;

  try {
    // Keep the old list until the new one has been saved.
    const updatedEmployees = employees.concat(newEmployee);

    saveEmployees(updatedEmployees);
    employees = updatedEmployees;

    updateFilterOptions(true);
    refreshEmployeeList();

    nameInput.value = "";
    departmentInput.value = "";
    positionInput.value = "";
    notesInput.value = "";
  } catch (error) {
    console.error("Error while adding an employee:", error);
    showError(
      formError,
      "An error occurred while adding the employee. Please check the list before trying again.",
    );
  }
}

// Fill the dialog and remember which employee is being edited.
function openEditDialog(employeeId) {
  clearError(listError);
  clearError(editError);

  const currentEmployee = getEmployeeById(employeeId);
  if (!currentEmployee) {
    showError(
      listError,
      "This employee could not be found. Please choose another entry.",
    );
    return;
  }

  editingEmployeeId = currentEmployee.id;
  editNameInput.value = currentEmployee.name;
  editDepartmentInput.value = currentEmployee.department;
  editPositionInput.value = currentEmployee.position;
  editNotesInput.value = currentEmployee.notes;
  editDialog.showModal();
}

// Check the edited values before saving them.
function editEmployee() {
  clearError(editError);

  const currentEmployee = getEmployeeById(editingEmployeeId);
  if (!currentEmployee) {
    showError(
      editError,
      "This employee no longer exists. Your changes could not be saved.",
    );
    return;
  }

  const name = editNameInput.value.trim();
  const department = editDepartmentInput.value.trim();
  const position = editPositionInput.value.trim();
  const notes = editNotesInput.value.trim();
  const editedEmployee = { name, department, position, notes };

  const errorMessage = validateEmployee(editedEmployee);
  editError.textContent = errorMessage;
  editError.classList.toggle("hidden", errorMessage === "");
  if (errorMessage !== "") return;

  try {
    // Copy the employee too, so a failed save won't change the original.
    const updatedEmployees = employees.map((employee) => {
      if (employee === currentEmployee) {
        return { ...employee, ...editedEmployee };
      }

      return employee;
    });

    saveEmployees(updatedEmployees);
    employees = updatedEmployees;

    updateFilterOptions(true);
    refreshEmployeeList();
    editDialog.close();
  } catch (error) {
    console.error("Error while editing an employee:", error);
    showError(
      editError,
      "An error occurred while saving the changes. Please check the employee details before trying again.",
    );
  }
}

// Sort this array by the chosen field and direction.
function sortEmployees(employeeList, sortOrder) {
  // Swap the compared values to sort from Z to A.
  switch (sortOrder) {
    case "name-asc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeA.name.localeCompare(employeeB.name),
      );
    case "name-desc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeB.name.localeCompare(employeeA.name),
      );
    case "department-asc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeA.department.localeCompare(employeeB.department),
      );
    case "department-desc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeB.department.localeCompare(employeeA.department),
      );
    case "position-asc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeA.position.localeCompare(employeeB.position),
      );
    case "position-desc":
      return employeeList.sort((employeeA, employeeB) =>
        employeeB.position.localeCompare(employeeA.position),
      );
  }
}

// Read the property named by the selected field: department or position.
function filterEmployees(employeeList, filterFieldName, selectedFilterValue) {
  if (selectedFilterValue === "") return employeeList;

  return employeeList.filter(
    (employee) => employee[filterFieldName] === selectedFilterValue,
  );
}

// Update the filter choices and keep the old selection when requested.
function updateFilterOptions(preserveFilterSelection = false) {
  const validEmployees = getValidEmployees();
  const previousFilterValue = filterValue.value;
  const selectedFilterField = filterField.value;
  const placeholderOption = filterValue.options[0];

  // Keep the placeholder and remove the old filter choices.
  filterValue.replaceChildren(placeholderOption);

  placeholderOption.value = "";
  filterValue.value = "";

  if (selectedFilterField === "") {
    filterValue.disabled = true;
    placeholderOption.textContent = "Choose a filter first";
  } else {
    filterValue.disabled = false;
    placeholderOption.textContent =
      selectedFilterField === "department"
        ? "All departments"
        : "All positions";

    const allValues = validEmployees.map(
      (employee) => employee[selectedFilterField],
    );

    allValues.sort((valueA, valueB) => valueA.localeCompare(valueB));
    // Each department or position should only appear once.
    const uniqueValues = new Set(allValues);

    uniqueValues.forEach((value) => {
      const filterOption = document.createElement("option");

      filterOption.value = value;
      filterOption.textContent = value;
      filterValue.appendChild(filterOption);
    });
  }

  // Restore the old choice if it is still in the options.
  if (preserveFilterSelection) {
    const hasPreviousFilterValue = Array.from(filterValue.options).some(
      (filterOption) => filterOption.value === previousFilterValue,
    );
    if (hasPreviousFilterValue) {
      filterValue.value = previousFilterValue;
    }
  }
}

// Remove the employee from a copy before saving the change.
function deleteEmployee(employeeId) {
  clearError(listError);

  const currentEmployee = getEmployeeById(employeeId);
  if (!currentEmployee) {
    showError(
      listError,
      "This employee could not be found and could not be deleted.",
    );
    return;
  }

  const employeeIndex = employees.indexOf(currentEmployee);
  if (employeeIndex === -1) {
    showError(
      listError,
      "This employee could not be found and could not be deleted.",
    );
    return;
  }

  try {
    const updatedEmployees = employees.slice();

    updatedEmployees.splice(employeeIndex, 1);
    saveEmployees(updatedEmployees);
    employees = updatedEmployees;

    updateFilterOptions(true);
    refreshEmployeeList();
  } catch (error) {
    console.error("Error while deleting an employee:", error);
    showError(
      listError,
      "An error occurred while deleting the employee. Please check the list before trying again.",
    );
  }
}

// Return an error message, or "" when the employee data is valid.
function validateEmployee(employeeData) {
  // Check the data first so property access and trim() are safe.
  if (
    typeof employeeData !== "object" ||
    employeeData === null ||
    Array.isArray(employeeData)
  ) {
    return "Invalid employee data. Please provide an employee object.";
  }

  if (
    typeof employeeData.name !== "string" ||
    typeof employeeData.department !== "string" ||
    typeof employeeData.position !== "string" ||
    typeof employeeData.notes !== "string"
  ) {
    return "Invalid employee data. Name, department, position and notes must be text.";
  }

  const hasEmptyRequiredFields =
    !employeeData.name.trim() ||
    !employeeData.department.trim() ||
    !employeeData.position.trim();
  const allowedNamePattern = /^[A-Za-zÄÖÜäöüß '-]+$/;
  const nameHasAllowedCharacters = allowedNamePattern.test(employeeData.name);
  // Reject names made up only of spaces, hyphens or apostrophes.
  const nameHasLetter = /[A-Za-zÄÖÜäöüß]/.test(employeeData.name);
  if (hasEmptyRequiredFields) {
    return "Please complete all required fields: name, department and position.";
  }

  if (!nameHasAllowedCharacters || !nameHasLetter) {
    return "Please enter a name containing letters. Only letters, spaces, hyphens and apostrophes are allowed.";
  }

  if (employeeData.name.length > 100) {
    return "Name must not exceed 100 characters.";
  }
  if (employeeData.department.length > 80) {
    return "Department must not exceed 80 characters.";
  }
  if (employeeData.position.length > 100) {
    return "Position must not exceed 100 characters.";
  }
  if (employeeData.notes.length > 500) {
    return "Notes must not exceed 500 characters.";
  }

  return "";
}

// Download all employees as JSON and clean up the temporary URL.
function exportEmployees() {
  clearError(listError);

  try {
    const employeesJson = JSON.stringify(employees, null, 2);
    // The Blob lets the browser download this JSON text.
    const employeesJsonBlob = new Blob([employeesJson], {
      type: "application/json",
    });
    const downloadUrl = URL.createObjectURL(employeesJsonBlob);
    const downloadLink = document.createElement("a");

    downloadLink.href = downloadUrl;
    downloadLink.download = "employees.json";
    document.body.appendChild(downloadLink);
    downloadLink.click();

    downloadLink.remove();
    URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error("Error while exporting employee data:", error);
    showError(
      listError,
      "Employee data could not be exported. Please try again.",
    );
  }
}

// Check and save the whole file before replacing the current list.
// Leave the list alone if any record is invalid or an ID appears twice.
async function importEmployees(importFile) {
  clearError(listError);

  try {
    const jsonFileContent = await importFile.text();
    const importedEmployees = JSON.parse(jsonFileContent);
    if (!Array.isArray(importedEmployees))
      throw new Error("The selected file must contain an array of employees.");

    const validEmployees = getValidEmployees(importedEmployees);
    // Fewer records means something was invalid or an ID was used twice.
    if (validEmployees.length !== importedEmployees.length) {
      throw new Error(
        "The selected file contains invalid employee records or duplicate IDs.",
      );
    }

    saveEmployees(validEmployees);
    employees = validEmployees;

    searchInput.value = "";
    filterField.value = "";

    updateFilterOptions();
    refreshEmployeeList();
    closeSettingsMenu();
  } catch (error) {
    console.error("Error while importing employee data:", error);
    showError(
      listError,
      "Employee data could not be imported or saved. Please check the file and browser storage.",
    );
  } finally {
    // Reset the input so the same file can be picked again.
    importInput.value = "";
  }
}

// Clear employee data, but keep the saved theme.
function resetEmployees() {
  clearError(listError);

  try {
    // Mark this reset so the sample data won't come back on reload.
    localStorage.setItem("employeesReset", "true");
    localStorage.removeItem("employees");
    employees = [];

    searchInput.value = "";
    filterField.value = "";
    sortSelect.value = "name-asc";

    updateFilterOptions();
    refreshEmployeeList();
    resetDialog.close();
    closeSettingsMenu();
  } catch (error) {
    console.error("Error while resetting employee data:", error);
    showError(listError, "Employee data could not be reset. Please try again.");
  }
}

// Close the menu and update aria-expanded.
function closeSettingsMenu() {
  settingsMenu.classList.add("hidden");
  settingsButton.setAttribute("aria-expanded", "false");
}

// Set the theme and its label in the menu.
function applyTheme(isDarkMode) {
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeLabel.textContent = isDarkMode ? "Dark mode" : "Light mode";
  themeButton.setAttribute(
    "aria-label",
    isDarkMode
      ? "Current theme: Dark mode. Switch to light mode."
      : "Current theme: Light mode. Switch to dark mode.",
  );
}

// Use the theme that was saved last time.
function loadTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";

    applyTheme(isDarkMode);
  } catch (error) {
    console.error("Error while loading the theme preference:", error);
  }
}

function saveEmployees(employeeList = employees) {
  localStorage.setItem("employees", JSON.stringify(employeeList));
}

// Load saved employees. If loading fails, keep the starting data.
function loadEmployees() {
  try {
    const storedEmployeesJson = localStorage.getItem("employees");

    // Show samples on the first start, but stay empty after a reset.
    if (storedEmployeesJson === null) {
      const wasReset = localStorage.getItem("employeesReset") === "true";
      if (wasReset) {
        employees = [];
      }

      return "";
    }

    const parsedEmployees = JSON.parse(storedEmployeesJson);
    if (!Array.isArray(parsedEmployees)) {
      throw new Error("Stored employee data must be an array.");
    }

    employees = parsedEmployees;
    return "";
  } catch (error) {
    console.error("Error while loading employee data:", error);
    return "Saved employee data could not be loaded. The initial employee data is displayed.";
  }
}

// Search and display
// Search, filter and sort the full list before showing a batch.
// Start from the first batch again when the results change.
function refreshEmployeeList() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const validEmployees = getValidEmployees();
  if (validEmployees.length < employees.length) {
    showError(
      listError,
      "Some employee records contain invalid data and could not be displayed.",
    );
  } else {
    clearError(listError);
  }

  matchingEmployees = validEmployees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm),
  );

  matchingEmployees = filterEmployees(
    matchingEmployees,
    filterField.value,
    filterValue.value,
  );

  matchingEmployees = sortEmployees(matchingEmployees, sortSelect.value);

  employeeList.innerHTML = "";
  displayedEmployeeCount = 0;
  loadMoreEmployees();
}

// Add employee cards, with an info button when there are notes.
function appendEmployees(employeesToDisplay) {
  employeesToDisplay.forEach((employee) => {
    const listItem = document.createElement("li");
    const headingRow = document.createElement("div");
    const nameHeading = document.createElement("h2");
    const departmentText = document.createElement("p");
    const positionText = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    listItem.dataset.id = employee.id;
    headingRow.classList.add("employee-heading");
    editButton.dataset.action = "edit";
    deleteButton.dataset.action = "delete";
    editButton.type = "button";
    deleteButton.type = "button";

    nameHeading.textContent = employee.name;
    departmentText.textContent = `Department: ${employee.department}`;
    positionText.textContent = `Position: ${employee.position}`;
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    headingRow.appendChild(nameHeading);

    listItem.append(
      headingRow,
      departmentText,
      positionText,
      editButton,
      deleteButton,
    );

    if (employee.notes) {
      const infoContainer = document.createElement("span");
      const infoButton = document.createElement("button");
      const tooltipElement = document.createElement("span");

      infoContainer.classList.add("employee-info");
      infoButton.classList.add("info-button");
      infoButton.type = "button";
      infoButton.textContent = "i";
      infoButton.setAttribute(
        "aria-label",
        `Additional information about ${employee.name}`,
      );

      tooltipElement.classList.add("employee-tooltip");
      tooltipElement.id = `employee-tooltip-${employee.id}`;
      tooltipElement.setAttribute("role", "tooltip");
      tooltipElement.textContent = employee.notes;
      // Give screen readers the notes linked to this button.
      infoButton.setAttribute("aria-describedby", tooltipElement.id);

      // Show the notes again when the user returns to the info button.
      infoContainer.addEventListener("mouseenter", () => {
        infoContainer.classList.remove("tooltip-dismissed");
      });

      infoContainer.addEventListener("focusin", () => {
        infoContainer.classList.remove("tooltip-dismissed");
      });

      infoContainer.append(infoButton, tooltipElement);
      headingRow.appendChild(infoContainer);
    }

    employeeList.appendChild(listItem);
  });
}

// Add up to ten entries and stop when the list is complete.
// Observe again in case the sentinel is still on screen.
function loadMoreEmployees() {
  const sentinel = document.getElementById("scroll-sentinel");

  employeeScrollObserver.unobserve(sentinel);
  if (displayedEmployeeCount >= matchingEmployees.length) return;

  const nextBatch = matchingEmployees.slice(
    displayedEmployeeCount,
    displayedEmployeeCount + 10,
  );
  appendEmployees(nextBatch);
  displayedEmployeeCount += nextBatch.length;

  if (displayedEmployeeCount < matchingEmployees.length) {
    employeeScrollObserver.observe(sentinel);
  }
}

// Employee lookup and ID generation
function getEmployeeById(employeeId) {
  const validEmployees = getValidEmployees();
  return validEmployees.find((employee) => employee.id === employeeId);
}

// Deleted employees leave gaps, so use the highest ID, not the count.
function getHighestId() {
  const validEmployees = getValidEmployees();
  return validEmployees.reduce((highestEmployeeId, employee) => {
    return Math.max(highestEmployeeId, employee.id);
  }, 0);
}

// Keep the first valid employee for each ID and skip the rest.
// The Set remembers which IDs have already been accepted.
function getValidEmployees(employeeList = employees) {
  const usedEmployeeIds = new Set();
  let validEmployees = [];

  employeeList.forEach((employee) => {
    if (
      validateEmployee(employee) === "" &&
      employee.id > 0 &&
      Number.isInteger(employee.id) &&
      !usedEmployeeIds.has(employee.id)
    ) {
      usedEmployeeIds.add(employee.id);
      validEmployees.push(employee);
    }
  });
  return validEmployees;
}

function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
}

function clearError(errorElement) {
  errorElement.textContent = "";
  errorElement.classList.add("hidden");
}

// Initial display
const employeeStorageErrorMessage = loadEmployees();

updateFilterOptions();
refreshEmployeeList();
loadTheme();

if (employeeStorageErrorMessage !== "") {
  showError(listError, employeeStorageErrorMessage);
}
