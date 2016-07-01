# Titanic Exercise in JS using Ephox Bolt 

This is the Titanic exercise in JS.

[Bolt](https://github.com/ephox/bolt) is a javascript module system, inspired by, but at this
point (intentionally) not compatible with the AMD specification.
Bolt consists of a runtime framework, compiler and testing tools.

## Usage: Development

For development usage, an http server is required, such as [Python SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html)
and Bolt must be installed.

<pre>
git clone https://github.com/intronic/eph-titanic-js.git
cd eph-titanic-js
python -m SimpleHTTPServer 8000
</pre>

Then open the demo html page in a browser: ```http://localhost:8000/demo/html/```

## Testing

Testing requires Bolt to be installed.

<pre>
cd eph-titanic-js
bolt test config/bolt/atomic.js test/js/atomic/*/*.js
</pre>


# Getting Started with Bolt

Checkout the [github wiki](https://github.com/ephox/bolt/wiki/Home) for some basic documentation on getting started.