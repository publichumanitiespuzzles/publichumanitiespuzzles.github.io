
import sys
import puz

puz_file = sys.argv[1]
html_file = sys.argv[1].replace("puz", "html")
puzzle_pdf = sys.argv[2]
solution_pdf = sys.argv[3]

p = puz.read(puz_file)

numbering = p.clue_numbering()



fi_template = open("html_template.txt", "r")
fo = open(html_file, "w")

for line in fi_template:
    if line.strip() == "INSERT_GRID":
        for row in range(p.height):
            cell = row * p.width
            fo.write("    " + ''.join(p.solution[cell:cell + p.width]) + "\n")
    elif line.strip() == "INSERT_ACROSS_CLUES":
        for clue in numbering.across:
            answer = ''.join(
                    p.solution[clue['cell'] + i]
                    for i in range(clue['len']))
            fo.write("    " + str(clue['num']) + " " + clue['clue'] + "\n")
    elif line.strip() == "INSERT_DOWN_CLUES":
         for clue in numbering.down:
            answer = ''.join(
                    p.solution[clue['cell'] + i]
                    for i in range(clue['len']))
            fo.write("    " + str(clue['num']) + " " + clue['clue'] + "\n")
    elif line.strip() == "INSERT_TITLE":
        fo.write("  exolve-title: " + p.title + "\n")
    elif line.strip() == "INSERT_AUTHOR":
        fo.write("  exolve-setter: " + p.author + "\n")
    elif line.strip() == "INSERT_ID":
        fo.write("  exolve-id: " + "-".join(p.title.lower().split()) + "\n")
    elif line.strip() == "INSERT_WIDTH":
        fo.write("  exolve-width: " + str(p.width) + "\n")
    elif line.strip() == "INSERT_HEIGHT":
        fo.write("  exolve-height: " + str(p.height) + "\n")
    elif "SOLUTIONPDFNAME" in line:
        fo.write(line.replace("SOLUTIONPDFNAME", solution_pdf).replace("PUZZLEPDFNAME", puzzle_pdf))
    else:
        fo.write(line)
