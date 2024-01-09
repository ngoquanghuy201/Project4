// Function to create a student information card
function createStudentInfoCard(data) {
    const container = document.getElementById('studentInfoContainer');

    const card = document.createElement('div');
    card.classList.add('student-infor', 'body');

    card.innerHTML = `
        <div class="left-body">
            <div class="std-inf">
                <h3>Student Information</h3>
                <div class="fullname">
                    <p id="fullname"><ion-icon name="person-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.fullName}</p>
                </div>
                <div class="usercode">
                    <p id="usercode"><ion-icon name="person-circle-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.userCode}</p>
                </div>
                <div class="major">
                    <p id="major"><ion-icon name="git-network-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.major}</p>
                </div>
                <div class="school">
                    <p id="school"><ion-icon name="business-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.school}</p>
                </div>
                <div class="mail">
                    <p id="mail"><ion-icon name="mail-outline"></ion-icon></p>
                    <p class="text" style="color: rgb(131, 131, 131, 1)">${data.email}</p>
                </div>
            </div>
        </div>
        <div class="right-body">
            <div class="course">
                <h3>Course</h3>
                ${data.courses.map(course => `
                    <div class="course${course.id}">
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
        fullName: 'Dương Thanh Tùng',
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