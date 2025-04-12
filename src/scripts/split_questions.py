import json
import re

def extract_questions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extraer las preguntas standard
    standard_pattern = r'export const standardQuestions = \[(.*?)\];'
    standard_match = re.search(standard_pattern, content, re.DOTALL)
    if standard_match:
        standard_questions = standard_match.group(1)
        standard_questions = re.findall(r'\{[^{}]*\}', standard_questions, re.DOTALL)
    else:
        standard_questions = []
    
    # Extraer las preguntas premium
    premium_pattern = r'export const premiumOnlyQuestions = \[(.*?)\];'
    premium_match = re.search(premium_pattern, content, re.DOTALL)
    if premium_match:
        premium_questions = premium_match.group(1)
        premium_questions = re.findall(r'\{[^{}]*\}', premium_questions, re.DOTALL)
    else:
        premium_questions = []
    
    return standard_questions, premium_questions

def parse_question(question_str):
    # Convertir la cadena de pregunta a un diccionario
    question_dict = {}
    
    # Extraer id
    id_match = re.search(r'id:\s*"([^"]*)"', question_str)
    if id_match:
        question_dict['id'] = id_match.group(1)
    
    # Extraer categoría
    categoria_match = re.search(r'categoria:\s*"([^"]*)"', question_str)
    if categoria_match:
        question_dict['categoria'] = categoria_match.group(1)
    
    # Extraer subtema si existe
    subtema_match = re.search(r'subTema:\s*"([^"]*)"', question_str)
    if subtema_match:
        question_dict['subTema'] = subtema_match.group(1)
    
    # Extraer pregunta
    pregunta_match = re.search(r'pregunta:\s*"([^"]*)"', question_str)
    if pregunta_match:
        question_dict['pregunta'] = pregunta_match.group(1)
    
    # Extraer opciones
    opciones_match = re.search(r'opciones:\s*\[(.*?)\]', question_str, re.DOTALL)
    if opciones_match:
        opciones_str = opciones_match.group(1)
        opciones = [opt.strip(' "\n') for opt in re.findall(r'"([^"]*)"', opciones_str)]
        question_dict['opciones'] = opciones
    
    # Extraer respuesta correcta
    respuesta_match = re.search(r'respuestaCorrecta:\s*(\d+)', question_str)
    if respuesta_match:
        question_dict['respuestaCorrecta'] = int(respuesta_match.group(1))
    
    # Extraer explicación
    explicacion_match = re.search(r'explicacion:\s*"([^"]*)"', question_str)
    if explicacion_match:
        question_dict['explicacion'] = explicacion_match.group(1)
    
    return question_dict

def organize_questions_by_subject(standard_questions, premium_questions):
    subjects = {}
    
    # Procesar preguntas standard
    for q in standard_questions:
        question_dict = parse_question(q)
        if question_dict and 'categoria' in question_dict:
            subject = question_dict['categoria'].lower()
            if subject not in subjects:
                subjects[subject] = {'standard': [], 'premium': []}
            subjects[subject]['standard'].append(question_dict)
    
    # Procesar preguntas premium
    for q in premium_questions:
        question_dict = parse_question(q)
        if question_dict and 'categoria' in question_dict:
            subject = question_dict['categoria'].lower()
            if subject not in subjects:
                subjects[subject] = {'standard': [], 'premium': []}
            subjects[subject]['premium'].append(question_dict)
    
    return subjects

def save_subject_files(subjects):
    import os
    
    # Crear directorio si no existe
    os.makedirs('src/data/questions', exist_ok=True)
    
    # Guardar archivo para cada asignatura
    for subject, questions in subjects.items():
        # Crear nombre de archivo válido
        filename = subject.lower().replace('à', 'a').replace('è', 'e').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace(' ', '_')
        filepath = f'src/data/questions/{filename}.json'
        
        # Guardar archivo
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)

def main():
    # Leer el archivo original
    standard_questions, premium_questions = extract_questions('src/data/questions.js')
    
    # Organizar preguntas por asignatura
    subjects = organize_questions_by_subject(standard_questions, premium_questions)
    
    # Guardar archivos JSON
    save_subject_files(subjects)
    
    print("Archivos JSON creados exitosamente en src/data/questions/")

if __name__ == '__main__':
    main() 