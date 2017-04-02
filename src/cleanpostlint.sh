find . -name *.nofix.js | perl -pne 'chomp; $f = $_; $f =~ s{\.(\w+)\.nofix}{.nofix.$1}xmsg; unlink($f); $_ = "rm $f\n"'
