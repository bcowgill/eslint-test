#!/usr/bin/env perl
while (my $line = <>)
{
	$line =~ s{/\*eslint}{;/\*e s l i n t}xmsg;
	print $line;
}
