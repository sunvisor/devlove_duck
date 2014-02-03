all: jsduck

jsduck:
	jsduck \
		--title "DevLove関西 - Sencha Touch」でHTML5を使ったモバイル向けWebアプリケーションを作ってみませんか？" \
		--touch-examples-ui \
		--eg-iframe=eg-iframe.html \
		--guides ./contents/guide.json \
		--output ./public_html/; \
	cp -r ~/mylib/touch/touch-2.3.1 ./public_html/touch-build;

.PHONY: all

