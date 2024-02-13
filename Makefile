
view:
	chromium-browser --user-data-dir="/var/tmp/Chrome" --disable-web-security & disown
	xdg-open ./webpage/index.html

serve:
	npx json-server db.json -p 3002

end_serve:
	killall node
