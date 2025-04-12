const fs = require('fs');
const path = require('path');

// Read the questions.js file
const questionsFile = fs.readFileSync(path.join(__dirname, '../data/questions.js'), 'utf8');

// Extract the questions array using regex
const standardQuestionsMatch = questionsFile.match(/export const standardQuestions = \[([\s\S]*?)\];/);
const premiumQuestionsMatch = questionsFile.match(/export const premiumQuestions = \[([\s\S]*?)\];/);

// Convert the matched content to actual JavaScript objects
const standardQuestions = eval(`[${standardQuestionsMatch[1]}]`);
const premiumQuestions = premiumQuestionsMatch ? eval(`[${premiumQuestionsMatch[1]}]`) : [];

// Group questions by category
const questionsByCategory = {};

// Process standard questions
standardQuestions.forEach(question => {
  if (!questionsByCategory[question.categoria]) {
    questionsByCategory[question.categoria] = {
      standard: [],
      premium: []
    };
  }
  // Check if question is not already in the array (avoid duplicates)
  if (!questionsByCategory[question.categoria].standard.some(q => q.id === question.id)) {
    questionsByCategory[question.categoria].standard.push(question);
  }
});

// Process premium questions
premiumQuestions.forEach(question => {
  if (!questionsByCategory[question.categoria]) {
    questionsByCategory[question.categoria] = {
      standard: [],
      premium: []
    };
  }
  // Check if question is not already in the array (avoid duplicates)
  if (!questionsByCategory[question.categoria].premium.some(q => q.id === question.id)) {
    questionsByCategory[question.categoria].premium.push(question);
  }
});

// Map of category names to file names
const categoryToFile = {
  'Biologia': 'biologia.json',
  'Química': 'quimica.json',
  'Física': 'fisica.json',
  'Geografia': 'geografia.json',
  'Història': 'història.json',
  'Matemàtiques': 'matematiques.json',
  'Matemàtiques CCSS': 'matematiques_ccss.json',
  'Filosofia': 'filosofia.json'
};

// Update each category's JSON file
Object.entries(questionsByCategory).forEach(([category, questions]) => {
  const fileName = categoryToFile[category];
  if (fileName) {
    const filePath = path.join(__dirname, '../data/questions', fileName);
    
    // Read existing file if it exists
    let existingQuestions = { standard: [], premium: [] };
    if (fs.existsSync(filePath)) {
      try {
        existingQuestions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch (e) {
        console.error(`Error reading ${fileName}:`, e);
      }
    }

    // Merge existing questions with new ones, avoiding duplicates
    const mergedQuestions = {
      standard: [...new Map([...existingQuestions.standard, ...questions.standard].map(q => [q.id, q])).values()],
      premium: [...new Map([...existingQuestions.premium, ...questions.premium].map(q => [q.id, q])).values()]
    };

    // Write the updated questions back to the file
    fs.writeFileSync(filePath, JSON.stringify(mergedQuestions, null, 2), 'utf8');
    console.log(`Updated ${fileName}`);
  }
}); 