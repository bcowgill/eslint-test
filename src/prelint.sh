# prior to linting the code rename something.fail.nofix.js as something.nofix.fail.js
# and convert eslint overrides to e s l i n t so they are ignored in .lint.js files
# creating src/code.lint.js as one big combined example file
find . -name *.nofix.js | perl -MFile::Copy -pne 'chomp; $f = $_; $f =~ s{\.(\w+)\.nofix}{.nofix.$1}xmsg; copy($_, $f); $_ = "cp $_ $f\n"'
./src/strip-eslint-overrides.pl `find . -name '*.lint.js'` > src/code.lint.js
