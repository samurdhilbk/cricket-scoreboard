# WLAN_scanner
A Python backed web page that gives details about the currently available WLANs of the host server. The host server must be running Windows.

The configuration of the Apache server to run Python as CGI was done by editing the httpd.conf file. I have included the entire httpd.conf file for completeness (the file is in the config folder). Also Apache was configured to accept index.py as an index file. The essential lines are, 
  1. Options Indexes FollowSymLinks Includes ExecCGI
  2. AddHandler cgi-script .cgi .pl .asp .py
  3. DirectoryIndex index.php index.pl index.cgi index.asp index.shtml index.html index.htm \
                    default.php default.pl default.cgi default.asp default.shtml default.html default.htm \
                    home.php home.pl home.cgi home.asp home.shtml home.html home.htm index.py
  
The 30-second refresh is handled by a meta tag in the HTML.

CSS and JS (including JQuery) is used to give a nice UI. However, the application would still run and produce the essential details and functionality even if you remove these altogether. If you want to do that, simply comment out the lines that print the CSS ans JSS import tags in the index.py file.
