from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in fluxa/__init__.py
from fluxa import __version__ as version

setup(
	name="fluxa",
	version=version,
	description="App for Fluxa Corp.",
	author="Janik Uellendahl",
	author_email="jj@fluxacorp.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
