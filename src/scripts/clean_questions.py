import json

def clean_questions(input_file, output_file):
    # Leer el archivo JSON
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Diccionarios para almacenar preguntas únicas
    standard_questions = {}
    premium_questions = {}
    
    # Procesar preguntas standard
    for q in data['standard']:
        if q['id'].startswith('s'):
            # Eliminar subtema si existe
            if 'subTema' in q:
                del q['subTema']
            standard_questions[q['pregunta']] = q
    
    # Procesar preguntas premium
    next_b_id = 1
    for q in data['premium']:
        # Si la pregunta ya existe, saltarla
        if q['pregunta'] in premium_questions:
            continue
        
        # Asegurarse de que tiene subtema
        if 'subTema' not in q:
            continue
            
        # Asignar nuevo ID
        q['id'] = f'b{next_b_id}'
        next_b_id += 1
        
        premium_questions[q['pregunta']] = q
    
    # Crear nuevo objeto de datos
    cleaned_data = {
        'standard': list(standard_questions.values()),
        'premium': list(premium_questions.values())
    }
    
    # Guardar archivo limpio
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    clean_questions('src/data/questions/història.json', 'src/data/questions/història_clean.json') 