document.getElementById('career-choice-form').addEventListener('submit', processFormSubmission);

function processFormSubmission(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);
    const placeOfResidence = document.getElementById('place-of-residence').value;
    const familyStatus = document.getElementById('family-status').value;
    const preferredSubjects = [...document.getElementById('preferred-subjects').selectedOptions].map(opt => opt.value);
    const hobbies = [...document.getElementById('hobbies').selectedOptions].map(opt => opt.value);
    const traits = [...document.getElementById('traits').selectedOptions].map(opt => opt.value);

    const recommendedCareers = determineRecommendedCareers(firstName, lastName, age, placeOfResidence, familyStatus, preferredSubjects, hobbies, traits);

    const resultDiv = document.getElementById('result-text');
    resultDiv.textContent = `${firstName} ${lastName}, на основе ваших интересов и предпочтений, мы рекомендуем следующие профессии:\n\n${recommendedCareers}`;

    document.getElementById('result-area').classList.remove('hidden');
}

function determineRecommendedCareers(firstName, lastName, age, placeOfResidence, familyStatus, preferredSubjects, hobbies, traits) {
    let careers = [];

    // Университеты и факультеты для взрослых
    if (age >= 17) {
        if (preferredSubjects.includes('math')) {
            careers.push('факультет прикладной математики и компьютерных наук');
        }

        if (preferredSubjects.includes('languages')) {
            careers.push('филологический факультет');
        }

        if (preferredSubjects.includes('humanities')) {
            careers.push('историко-культурный факультет');
        }

        if (preferredSubjects.includes('technology')) {
            careers.push('инженерный факультет');
        }

        if (preferredSubjects.includes('creative')) {
            careers.push('факультет дизайна и искусств');
        }

        if (preferredSubjects.includes('sciences')) {
            careers.push('естественно-научный факультет');
        }

        return `Для поступления в вуз рекомендуем следующие факультеты: ${careers.join(', ')}. Федеральная территория "Сириус" предлагает отличные программы бакалавриата и магистратуры.`;
    }

    // Специальные смены для молодёжи до 17 лет
    if (age <= 16) {
        if (preferredSubjects.includes('math')) {
            careers.push('математическая смена');
        }

        if (preferredSubjects.includes('languages')) {
            careers.push('языковая смена');
        }

        if (preferredSubjects.includes('humanities')) {
            careers.push('гуманитарная смена');
        }

        if (preferredSubjects.includes('technology')) {
            careers.push('технологическая смена');
        }

        if (preferredSubjects.includes('creative')) {
            careers.push('творческая смена');
        }

        if (preferredSubjects.includes('sciences')) {
            careers.push('естественно-научная смена');
        }

        return `Рекомендуемая смена для посещения: ${careers.join(', ')}. Образовательный центр "Сириус" организует специализированные образовательные смены для одарённой молодежи.`;
    }

    return ''; // Возвращаем пустую строку, если условия не выполнены
}
function processFormSubmission(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);
    const placeOfResidence = document.getElementById('place-of-residence').value;
    const familyStatus = document.getElementById('family-status').value;
    const preferredSubjects = [...document.getElementById('preferred-subjects').selectedOptions].map(opt => opt.value);
    const hobbies = [...document.getElementById('hobbies').selectedOptions].map(opt => opt.value);
    const traits = [...document.getElementById('traits').selectedOptions].map(opt => opt.value);

    const recommendedCareers = determineRecommendedCareers(preferredSubjects, hobbies, traits);

    const resultDiv = document.getElementById('result-text');
    resultDiv.textContent = `${firstName} ${lastName}, на основе ваших интересов и предпочтений, мы рекомендуем следующие профессии:\n\n${recommendedCareers}`;

    document.getElementById('result-area').classList.remove('hidden');
}

function processFormSubmission(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);
    const placeOfResidence = document.getElementById('place-of-residence').value;
    const familyStatus = document.getElementById('family-status').value;
    const preferredSubjects = [...document.getElementById('preferred-subjects').selectedOptions].map(opt => opt.value);
    const hobbies = [...document.getElementById('hobbies').selectedOptions].map(opt => opt.value);
    const traits = [...document.getElementById('traits').selectedOptions].map(opt => opt.value);

    const recommendedCareers = determineRecommendedCareers(preferredSubjects, hobbies, traits);

    const resultDiv = document.getElementById('result-text');
    resultDiv.textContent = `${firstName} ${lastName}, на основе ваших интересов и предпочтений, мы рекомендуем следующие профессии:\n\n${recommendedCareers}`;

    document.getElementById('result-area').classList.remove('hidden');
}

function determineRecommendedCareers(preferredSubjects, hobbies, traits) {
    let careers = [];

    // Проверяем предпочтения по учебным предметам
    preferredSubjects.forEach(subj => {
        switch (subj) {
            case 'math':
                careers.push('Учёный', 'Программист', 'Инженер');
                break;
            case 'languages':
                careers.push('Преподаватель', 'Переводчик', 'Дипломат');
                break;
            case 'humanities':
                careers.push('Историк', 'Политолог', 'Журналист');
                break;
            case 'technology':
                careers.push('Техник', 'Робототехник', 'Программист');
                break;
            case 'creative':
                careers.push('Дизайнер', 'Музыкант', 'Актёр');
                break;
            case 'sciences':
                careers.push('Химик', 'Биолог', 'Геолог');
                break;
        }
    });

    // Хобби влияют на творческие и активные профессии
    hobbies.forEach(hobby => {
        switch (hobby) {
            case 'coding':
                careers.push('Программист', 'Web-разработчик');
                break;
            case 'writing':
                careers.push('Автор', 'Редактор');
                break;
            case 'painting':
                careers.push('Художник', 'Дизайнер');
                break;
            case 'singing-dancing':
                careers.push('Музыкант', 'Балетмейстер');
                break;
            case 'crafting':
                careers.push('Ювелир', 'Резчик по дереву');
                break;
            case 'gaming':
                careers.push('Game-дизайнер', 'Разработчик игр');
                break;
            case 'cooking':
                careers.push('Шеф-повар', 'Конфетье');
                break;
            case 'traveling':
                careers.push('Туроператор', 'Гид');
                break;
        }
    });

    // Черты характера добавляют дополнительную детализацию
    traits.forEach(trait => {
        switch (trait) {
            case 'analytical':
                careers.push('Аналитик', 'Астроном');
                break;
            case 'creativity':
                careers.push('Архитектор', 'Иллюстратор');
                break;
            case 'empathy':
                careers.push('Психолог', 'Социальный педагог');
                break;
            case 'organization':
                careers.push('Управляющий персоналом', 'Организатор мероприятий');
                break;
            case 'teamwork':
                careers.push('Команда разработчиков', 'HR-менеджер');
                break;
            case 'leadership':
                careers.push('Руководитель стартапа', 'Топ-менеджер');
                break;
            case 'communication':
                careers.push('PR-специалист', 'Журналист');
                break;
            case 'technical':
                careers.push('Системный администратор', 'IT-эксперт');
                break;
        }
    });

    // Удаляем дубликаты и возвращаем уникальные рекомендации
    return [...new Set(careers)].join(', ');
}