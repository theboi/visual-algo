====================
Algorithm Visualiser
====================

|License: GPL v3|

About
-----

*Algorithm Visualiser* was built to allow users to picture algorithms,
such as sorting, graphically.

Made with React, Next.js, and TypeScript (Superset of JavaScript).

This project was inspired by `a project`_ by `Clément Mihailescu`_.

Algorithms
----------

Sorting
~~~~~~~

+----------------+-----------+-----------------------------------------+
| Algorithm      | Space     | Time (Big O)                            |
|                |           +-------------+-------------+-------------+
|                |           | Best        | Worst       | Average     |
+----------------+-----------+-------------+-------------+-------------+
| Bubble Sort    | 1         | n           | n^2         | n^2         |
+----------------+-----------+-------------+-------------+-------------+
| Quicksort      | log(n)    | n log(n)    | n^2         | n log(n)    |
+----------------+-----------+-------------+-------------+-------------+
| Mergesort      | n         | n log(n)    | n log(n)    | n log(n)    |
+----------------+-----------+-------------+-------------+-------------+
| Timsort        | n         | n           | n log(n)    | n log(n)    |
+----------------+-----------+-------------+-------------+-------------+
| Insertion Sort | 1         | n           | n^2         | n^2         |
+----------------+-----------+-------------+-------------+-------------+
| Heapsort       | 1         | n log(n)    | n log(n)    | n log(n)    |
+----------------+-----------+-------------+-------------+-------------+
.. | Blank          |           |             |             |             |
.. +----------------+-----------+-------------+-------------+-------------+

License
-------

This repository is licensed under the GNU General Public License v3.0

.. _a project: https://github.com/clementmihailescu/Sorting-Visualizer
.. _Clément Mihailescu: https://github.com/clementmihailescu

.. |License: GPL v3| image:: https://img.shields.io/badge/License-GPLv3-blue.svg
   :target: https://www.gnu.org/licenses/gpl-3.0
