#!/usr/bin/env perl
# convert eslint comment overrides to e s l i n t so they are ignored
while (my $line = <>)
{
	$line =~ s{/\*eslint}{;/\*e s l i n t}xmsg;
	print $line;
}
