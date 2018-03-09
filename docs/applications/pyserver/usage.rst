Execution
==========

There are several examples that demonstrate how to serve custom content.
To try them, run one of the following commands from the ``microraiden``
directory:

.. code:: bash

    python3 -m microraiden.examples.demo_proxy --private-key <private_key_file> start

or

.. code:: bash

    python3 -m microraiden.examples.wikipaydia --private-key <private_key_file> --private-key-password-file <password_file> start


By default, the web server listens on ``0.0.0.0:5000``.
The private key file should be in the JSON format produced by Geth/Parity
(A guide how to extract private keys is described in the :ref:`Blockchain Tutorial <blockchain-setup>`)
and must be readable and writable only by the owner to be accepted (``-rw-------``).
Using unixoid operating systems, ``chmod a-rw`` filename followed by ``chmod u+rw`` filename
sets the correct permissions for the private key file.
A ``--private-key-password-file`` option can be specified, containing the password for the
private key in the first line of the file. If it’s not provided, the password will be
prompted interactively in the command line options.
