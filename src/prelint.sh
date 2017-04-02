find . -name *.nofix.js | perl -MFile::Copy -pne 'chomp; $f = $_; $f =~ s{\.(\w+)\.nofix}{.nofix.$1}xmsg; copy($_, $f); $_ = "cp $_ $f\n"'
