import random

# Sample text
text = "I loves all my cats"

# Tokenize into words
words = text.split()

# Create the Markov Chain dictionary
markov_chain = {}

for i in range(len(words) - 1):
    word = words[i]
    next_word = words[i + 1]

    if word not in markov_chain:
        markov_chain[word] = []

    markov_chain[word].append(next_word)

def generate_text(start_word, length=10):
    if start_word not in markov_chain:
        return "Start word not in corpus."

    result = [start_word]
    current_word = start_word

    for _ in range(length - 1):
        next_word = random.choice(markov_chain.get(current_word, ["."]))
        result.append(next_word)
        current_word = next_word

    return " ".join(result)

# Generate new text
print(generate_text("I", 10))
