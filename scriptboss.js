function logout(){
    window.location.href="index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the table body
    var tableBody = document.getElementById("tableBody");

    // Create 10 empty rows (you can adjust the number as needed)
    for (var i = 1; i <= 100; i++) {
        var row = document.createElement("tr");

        // Add cells with empty content
        for (var j = 1; j <= 7; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }

        // Append the row to the table body
        tableBody.appendChild(row);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('tableBody');
    var hoverSquareContainer = document.getElementById('show-student');
    
    table.addEventListener('mousemove', function (event) {
        hoverSquareContainer.style.left = (event.pageX + 10) + 'px';
        hoverSquareContainer.style.top = (event.pageY + 10) + 'px';
    });

    table.addEventListener('mouseenter', function () {
        hoverSquareContainer.style.display = 'block';
    });

    table.addEventListener('mouseleave', function () {
        hoverSquareContainer.style.display = 'none';
    });
});

// Function to create a student information card
function createStudentInfoCard(data) {
    const container = document.getElementById('studentInfoContainer');

    const card = document.createElement('div');
    card.classList.add('student-infor', 'body');

    card.innerHTML = `
        <div class="left-body">
            <div class="std-inf">
                <h3>Student Information</h3>
                <div class="fullname" id="center_text">
                    <p id="fullname"><ion-icon name="person-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.fullName}</p>
                </div>
                <div class="usercode" id="center_text">
                    <p id="usercode"><ion-icon name="person-circle-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.userCode}</p>
                </div>
                <div class="major" id="center_text">
                    <p id="major"><ion-icon name="git-network-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.major}</p>
                </div>
                <div class="school" id="center_text">
                    <p id="school"><ion-icon name="business-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.school}</p>
                </div>
                <div class="mail" id="center_text">
                    <p id="mail"><ion-icon name="mail-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.email}</p>
                </div>
            </div>
        </div>
        <div class="right-body">
            <div class="course">
                <h3>Course</h3>
                ${data.courses.map(course => `
                    <div class="course${course.id}" id="center_text">
                        <p id="course${course.id}"><ion-icon name="book-outline"></ion-icon></p>
                        <p class="text" style="color: rgb(131, 131, 131, 1)">${course.name}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.appendChild(card);
}

// Sample data for two students
const studentsData = [
    {
        fullName: 'Dương Thanh ABCD',
        userCode: 'BIT220165',
        major: 'Công nghệ thông tin',
        school: 'CMC UNIVERSITY',
        email: 'bit220165@st.cmc-u.edu.vn',
        courses: [
            { id: 1, name: 'Công nghệ phần mềm' },
            { id: 2, name: 'Cơ sở dữ liệu' },
            { id: 3, name: 'Cơ sở lập trình web' },
            { id: 4, name: 'Cơ sở lập trình' },
            { id: 5, name: 'Tư tưởng Hồ Chí Minh' },
        ]
    },
    // {
    //     fullName: 'Nguyễn Văn A',
    //     userCode: 'BIT220166',
    //     major: 'Khoa học máy tính',
    //     school: 'CMC UNIVERSITY',
    //     email: 'bit220166@st.cmc-u.edu.vn',
    //     courses: [
    //         { id: 1, name: 'Trí tuệ nhân tạo' },
    //         { id: 2, name: 'An toàn và bảo mật thông tin' },
    //         { id: 3, name: 'Mạng máy tính' },
    //         { id: 4, name: 'Lập trình hệ thống' },
    //         { id: 5, name: 'Lập trình song song' },
    //     ]
    // }
];

// Create student information cards for each student
studentsData.forEach(student => createStudentInfoCard(student));