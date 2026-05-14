from ddgs import DDGS

def pesquisar_duck(pergunta):
    # O uso do 'with DDGS()' continua igual, apenas o pacote mudou
    with DDGS() as ddgs:
        resultados = [r['body'] for r in ddgs.text(pergunta, max_results=10)]
        return "\n".join(resultados)

# Teste rápido

# a = input("Search: ")
# print(pesquisar_duck(a))

#pip install ddgs

import serpapi
def search(userInput):
    client = serpapi.Client(api_key="serapi_key")
    return client.search({
    "engine": "duckduckgo",
    "q": userInput,
    "kl": "us-en"
    })

print(search("How is Mateus Asato?"))