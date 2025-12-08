import requests

def seed_responder(mensagem: str) -> str:
    try:
        r = requests.post(
            "http://localhost:11434/api/chat",
            json={
                "model": "seed-ai",
                "messages": [{"role": "user", "content": mensagem}],
                "stream": False
            },
            timeout=90
        )
        return r.jsonj() ["message"]["content"]
    except:
        return "Desculpa bro, alguém tropeçou nos cabos por aqui... Vai orando aí enquanto trabalhamos para resolver daqui!"
