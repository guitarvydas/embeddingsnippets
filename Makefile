all: variable func commaop transpile

variable:
	@echo '*** simple variable ***'
	@node variable.js
	@echo
func:
	@echo '*** function call embedding ***'
	@node func.js
	@echo
commaop:
	@echo '*** comma operator ***'
	@node commaop.js
	@echo
