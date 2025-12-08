import requests

def seed_responder(mensagem: str) -> str:
    try:
        r = requests.post(
            "http://localhost:11434/api/chat",
            json={
                "model": "seed-ai",
                "messages": [{"role": "user", "content": mensagem}],
                "stream": False,
                "keep_alive": "10m" # opcional
            },
            timeout=90
        )
        r.raise_for_status()
        
        data = r.json()
        return data["message"]["content"]
        
    except requests.exceptions.RequestException as e:
        print(f"[SEED-AI ERROR] {e}")
        return "Desculpa bro, alguém tropeçou nos cabos por aqui... kkk"
    except (KeyError, TypeError, ValueError) as e:
        print(f"[SEED-AI JSON ERROR] {e} | Response: {r.text}")
        return "Tirei um cochilo aqui, 2 minutos que to me recuperando!"
