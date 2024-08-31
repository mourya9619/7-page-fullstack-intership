document.addEventListener('DOMContentLoaded', () => {
    loadOverallPerformance();
    loadQuestionAnalysis();
    loadStudentPerformanceTrends();
    loadImprovementAreas();
});

function loadOverallPerformance() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                label: 'Number of Students',
                data: [5, 10, 15, 20, 3],
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function loadQuestionAnalysis() {
    const questionDetails = [
        { question: 'Q1', correct: 70, incorrect: 30, averageTime: '1m 30s' },
        { question: 'Q2', correct: 50, incorrect: 50, averageTime: '2m 00s' },
        { question: 'Q3', correct: 90, incorrect: 10, averageTime: '1m 10s' }
    ];

    const questionContainer = document.getElementById('question-details');
    questionContainer.innerHTML = '';

    questionDetails.forEach(detail => {
        const div = document.createElement('div');
        div.className = 'question-item';
        div.innerHTML = `
            <h3>${detail.question}</h3>
            <p>Correct: ${detail.correct}%</p>
            <p>Incorrect: ${detail.incorrect}%</p>
            <p>Average Time: ${detail.averageTime}</p>
        `;
        questionContainer.appendChild(div);
    });
}

function loadStudentPerformanceTrends() {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Assessment 1', 'Assessment 2', 'Assessment 3', 'Assessment 4'],
            datasets: [{
                label: 'Student A',
                data: [70, 75, 80, 85],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }, {
                label: 'Student B',
                data: [60, 65, 70, 75],
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function loadImprovementAreas() {
    const improvementAreas = [
        'Topic 1: Common mistakes in Q1',
        'Topic 2: Time management in Q2',
        'Topic 3: Clarification needed for Q3'
    ];

    const improvementList = document.getElementById('improvement-areas');
    improvementList.innerHTML = '';

    improvementAreas.forEach(area => {
        const li = document.createElement('li');
        li.textContent = area;
        improvementList.appendChild(li);
    });
}

function exportReport() {
    alert('Report exported as PDF!');
}

function compareAssessments() {
    alert('Comparison of assessments displayed!');
}
