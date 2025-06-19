// script.js
document.addEventListener('DOMContentLoaded', () => {
    const improvementAreaInput = document.getElementById('improvementArea');
    const submitBtn = document.getElementById('submitBtn');
    const suggestionArea = document.getElementById('suggestionArea');
    const defaultSuggestionText = '<p class="text-gray-500 italic">Your personalized suggestion will appear here...</p>';

    // Basic suggestion engine (can be expanded later)
    const suggestions = {
        "public speaking": "Practice speaking in front of a mirror or record yourself. Join a local Toastmasters group.",
        "coding in python": "Start with a beginner-friendly course (e.g., on Codecademy or freeCodeCamp). Work on small projects to apply what you learn. Read Python documentation.",
        "time management": "Use a planner or a digital tool to organize your tasks. Try the Pomodoro Technique. Prioritize tasks using the Eisenhower Matrix.",
        "learning a new language": "Use language learning apps like Duolingo or Babbel. Practice regularly, even if it's just for 15 minutes a day. Try to immerse yourself by watching movies or listening to music in that language.",
        "fitness": "Start with small, achievable goals. Find an activity you enjoy. Consistency is key, even if it's just a short workout each day.",
        "writing": "Write daily, even if it's just a paragraph. Read widely to see different writing styles. Get feedback on your writing.",
        "financial planning": "Create a budget and track your expenses. Set financial goals (e.g., saving for a down payment, paying off debt). Educate yourself about investing.",
        "cooking": "Start with simple recipes. Watch cooking tutorials online. Don't be afraid to experiment with ingredients.",
        "networking": "Attend industry events or online webinars. Reach out to people on LinkedIn. Focus on building genuine relationships.",
        "mindfulness": "Practice meditation for a few minutes each day. Be present in your daily activities. Try apps like Headspace or Calm."
    };

    const defaultSuggestions = [
        "Break down your goal into smaller, manageable steps.",
        "Find a mentor or someone who has experience in this area.",
        "Dedicate specific time slots in your week to work on this.",
        "Track your progress and celebrate small wins.",
        "Don't be afraid to ask for help or look for resources online.",
        "Be patient with yourself; improvement takes time and effort."
    ];

    submitBtn.addEventListener('click', () => {
        const userInput = improvementAreaInput.value.trim().toLowerCase();
        suggestionArea.innerHTML = ''; // Clear previous suggestion

        if (userInput === "") {
            suggestionArea.innerHTML = '<p class="text-red-500 italic">Please enter an area you want to improve.</p>';
            return;
        }

        let foundSuggestion = null;
        // Try to find a specific suggestion
        for (const key in suggestions) {
            if (userInput.includes(key)) {
                foundSuggestion = suggestions[key];
                break;
            }
        }

        if (foundSuggestion) {
            const p = document.createElement('p');
            p.textContent = foundSuggestion;
            suggestionArea.appendChild(p);
        } else {
            // If no specific suggestion, provide a general one
            const randomIndex = Math.floor(Math.random() * defaultSuggestions.length);
            const p = document.createElement('p');
            p.textContent = `For improving "${improvementAreaInput.value.trim()}", consider this: ${defaultSuggestions[randomIndex]}`;
            suggestionArea.appendChild(p);
        }

        // Clear the input field after submission
        // improvementAreaInput.value = '';
        // Decided against clearing input, user might want to refine their query
    });

    // Optional: Allow pressing Enter to submit
    improvementAreaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            submitBtn.click();
        }
    });

    // Reset to default placeholder if input is cleared
    improvementAreaInput.addEventListener('input', () => {
        if (improvementAreaInput.value.trim() === "" && suggestionArea.firstChild && suggestionArea.firstChild.textContent !== defaultSuggestionText) {
             // Only reset if it's not already showing the default or an error
            if (!suggestionArea.querySelector('.text-red-500')) {
                suggestionArea.innerHTML = defaultSuggestionText;
            }
        }
    });

    console.log("Future Goat Picker script loaded and initialized!");
});
