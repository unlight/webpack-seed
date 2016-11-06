require('ts-node').register({ });
require("shelljs/make");

declare var target: any;
declare var cd, pwd, ls, find, cp, rm, mv, mkdir, test, cat, sed, grep, which, echo, pushd, popd, dirs, ln, exit, exec, chmod, tempdir, error, touch: any;

target.ping = () => {
	echo('pong');
};
