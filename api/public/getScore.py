from mobfot import MobFot
import json

client = MobFot()

def getScore(ID, Home, Away):
    data = client.get_match_details(ID)
    if isinstance(data, str):
        try:
            data = json.loads(data)
        except json.JSONDecodeError:
            raise ValueError("Received data is not in valid JSON format")
    if isinstance(data, dict) and 'header' in data and 'teams' in data['header']:
        teams = data['header']['teams']
    else:
        raise ValueError("Expected data to have 'header' and 'teams' keys")
    if not isinstance(teams, list):
        raise ValueError("Expected 'teams' to be a list of dictionaries")

    filtered_scores = {item['name']: item['score'] for item in teams if item.get('name') in [Home, Away]}
    
    return filtered_scores

print(getScore(4480794, "VfL Bochum", "Fortuna Düsseldorf"))
